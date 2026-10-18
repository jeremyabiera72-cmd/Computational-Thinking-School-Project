
document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(function (question) {
        question.addEventListener("click", function () {
            const answerId = question.getAttribute("aria-controls");
            const answer = document.getElementById(answerId);
            const icon = question.querySelector(".icon");

            // Stop if the matching elements are missing
            if (!answer || !icon) {
                console.error("FAQ question or answer is missing.");
                return;
            }

            // Determine whether the answer is currently open
            const isOpen =
                question.getAttribute("aria-expanded") === "true";

            // Toggle the answer's visibility
            answer.hidden = isOpen;

            // Update the button's accessibility state
            question.setAttribute(
                "aria-expanded",
                String(!isOpen)
            );

            // Change the icon
            icon.textContent = isOpen ? "+" : "−";
        });
    });

    console.log(
        `FAQ initialized successfully: ${questions.length} questions found.`
    );
});
