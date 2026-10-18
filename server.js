require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "20kb" }));
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "html_pages", "home.html"));
});

app.post("/api/chat", async (req, res) => {
    try {
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return res.status(500).json({
                error: "GEMINI_API_KEY is missing from .env.",
            });
        }

        const messages = req.body.messages;

        if (!Array.isArray(messages) || messages.length === 0) {
            return res.status(400).json({
                error: "Please provide a question.",
            });
        }

        const validMessages = messages
            .filter(
                message =>
                    message && ["user", "assistant"].includes(message.role) && typeof message.content === "string",
            )
            .slice(-20)
            .map(message => ({
                role: message.role === "assistant" ? "model" : "user",
                parts: [
                    {
                        text: message.content.slice(0, 4000),
                    },
                ],
            }));

        if (validMessages.length === 0 || validMessages[validMessages.length - 1].role !== "user") {
            return res.status(400).json({
                error: "A valid user question is required.",
            });
        }

        const response = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-goog-api-key": apiKey,
                },
                body: JSON.stringify({
                    systemInstruction: {
                        parts: [
                            {
                                text: "You are Yumi Assistant, a friendly learning assistant for a website about computational thinking in daily life. Explain decomposition, pattern recognition, abstraction, and algorithms in simple language. Give practical examples when helpful.",
                            },
                        ],
                    },
                    contents: validMessages,
                    generationConfig: {
                        maxOutputTokens: 800,
                    },
                }),
            },
        );

        const data = await response.json();

        if (!response.ok) {
            console.error("Gemini API error:", data);

            return res.status(response.status).json({
                error: data.error?.message || "Gemini could not process your request.",
            });
        }

        const reply = data.candidates?.[0]?.content?.parts
            ?.map(part => part.text || "")
            .join("")
            .trim();

        if (!reply) {
            return res.status(502).json({
                error: "Gemini returned an empty response. Please try again.",
            });
        }

        res.json({ reply });
    } catch (error) {
        console.error("Yumi Assistant error:", error.message);

        res.status(500).json({
            error: "Unable to connect to Gemini. Please try again.",
        });
    }
});

app.listen(PORT, () => {
    console.log(`Yumi Assistant running at http://localhost:${PORT}`);
});
