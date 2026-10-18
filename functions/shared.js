//For AI DO NOT TOUCH - BAKA MAG BUG NANAMAN

const chatButton = document.getElementById("chatButton");
const chatPopup = document.getElementById("chatPopup");
const closeChat = document.getElementById("closeChat");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

const conversation = [
    {
        role: "system",
        content:
            "You are Yumi Assistant, a friendly learning assistant for a website about computational thinking in daily life. Explain concepts simply and clearly, using practical examples when helpful.",
    },
];

chatButton.addEventListener("click", () => {
    chatPopup.classList.toggle("active");

    if (chatPopup.classList.contains("active")) {
        chatInput.focus();
    }
});

closeChat.addEventListener("click", () => {
    chatPopup.classList.remove("active");
});

function addMessage(text, className) {
    const message = document.createElement("div");

    message.className = className;
    message.textContent = text;

    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    return message;
}

chatForm.addEventListener("submit", async event => {
    event.preventDefault();

    const question = chatInput.value.trim();

    if (!question) {
        return;
    }

    addMessage(question, "user-message");
    chatInput.value = "";
    chatInput.disabled = true;

    const sendButton = chatForm.querySelector("button");
    sendButton.disabled = true;

    const loadingMessage = addMessage("Thinking...", "response-container");

    conversation.push({
        role: "user",
        content: question,
    });

    try {
        const response = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                messages: conversation,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Unable to get a response.");
        }

        loadingMessage.textContent = data.reply;

        conversation.push({
            role: "assistant",
            content: data.reply,
        });
    } catch (error) {
        loadingMessage.textContent = "Sorry, I couldn't get a response. Please try again.";

        conversation.pop();

        console.error("CT Assistant error:", error);
    } finally {
        chatInput.disabled = false;
        sendButton.disabled = false;
        chatInput.focus();
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
