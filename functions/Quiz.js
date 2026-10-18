const questions = [
    {
        question: "Which language is used to style websites?",
        answers: ["Python", "Java", "CSS", "C++"],
        correct: 2,
    },
    {
        question: "What is computational thinking?",
        answers: [
            "Writing code without planning",
            "Solving problems using logical steps",
            "Memorizing programming languages",
            "Using a computer for everything",
        ],
        correct: 1,
    },
    {
        question: "Which is an example of decomposition?",
        answers: [
            "Breaking a big problem into smaller parts",
            "Repeating the same mistake",
            "Guessing an answer",
            "Ignoring a problem",
        ],
        correct: 0,
    },
    {
        question: "What is an algorithm?",
        answers: [
            "A computer screen",
            "A programming error",
            "A type of computer",
            "A sequence of steps to solve a problem",
        ],
        correct: 3,
    },
    {
        question: "Which language adds interactivity to websites?",
        answers: ["HTML", "CSS", "JavaScript", "SQL"],
        correct: 2,
    },
    {
        question: "What is pattern recognition?",
        answers: [
            "Finding similarities or repeated patterns",
            "Deleting all information",
            "Writing random instructions",
            "Turning off a computer",
        ],
        correct: 0,
    },
    {
        question: "What does abstraction mean in computational thinking?",
        answers: [
            "Adding unnecessary details",
            "Focusing on important information",
            "Repeating every step",
            "Removing the solution",
        ],
        correct: 1,
    },
    {
        question: "Which one is a programming language?",
        answers: ["HTML", "CSS", "Photoshop", "Python"],
        correct: 3,
    },
    {
        question: "What is debugging?",
        answers: ["Designing a website", "Finding and fixing errors", "Creating a password", "Saving a file"],
        correct: 1,
    },
    {
        question: "Why do programmers use loops?",
        answers: [
            "To repeat instructions",
            "To delete programs",
            "To change the computer screen",
            "To stop all calculations",
        ],
        correct: 0,
    },
    {
        question: "What does HTML stand for?",
        answers: [
            "HyperText Markup Language",
            "HighText Machine Language",
            "Hyper Transfer Main Link",
            "Home Tool Markup Language",
        ],
        correct: 0,
    },
    {
        question: "What is the main purpose of CSS?",
        answers: [
            "To store website data",
            "To style and design web pages",
            "To create computer hardware",
            "To fix internet connections",
        ],
        correct: 1,
    },
    {
        question: "Which HTML tag creates a paragraph?",
        answers: ["<h1>", "<img>", "<p>", "<div>"],
        correct: 2,
    },
    {
        question: "Which HTML tag creates a link?",
        answers: ["<a>", "<p>", "<body>", "<table>"],
        correct: 0,
    },
    {
        question: "Which CSS property changes text color?",
        answers: ["font-size", "background", "margin", "color"],
        correct: 3,
    },
    {
        question: "Which CSS property changes the text size?",
        answers: ["font-size", "text-color", "padding", "border"],
        correct: 0,
    },
    {
        question: "Which symbol is commonly used for a JavaScript comment on one line?",
        answers: ["##", "<!--", "//", "**"],
        correct: 2,
    },
    {
        question: "Which keyword declares a variable that can be reassigned in JavaScript?",
        answers: ["const", "let", "fixed", "define"],
        correct: 1,
    },
    {
        question: "Which JavaScript keyword declares a constant?",
        answers: ["change", "varies", "let", "const"],
        correct: 3,
    },
    {
        question: "Which operator checks strict equality in JavaScript?",
        answers: ["===", "=", "!=", "+"],
        correct: 0,
    },
    {
        question: "What is the result of 5 + 3 in JavaScript?",
        answers: ["53", "2", "8", "15"],
        correct: 2,
    },
    {
        question: "Which statement is used to make a decision in JavaScript?",
        answers: ["repeat", "if", "print", "style"],
        correct: 1,
    },
    {
        question: "What does an if statement do?",
        answers: [
            "Repeats code forever",
            "Deletes a variable",
            "Creates a website design",
            "Runs code when a condition is true",
        ],
        correct: 3,
    },
    {
        question: "Which loop is commonly used when the number of repetitions is known?",
        answers: ["for loop", "if statement", "switch statement", "CSS rule"],
        correct: 0,
    },
    {
        question: "What does i++ usually do in JavaScript?",
        answers: ["Decreases i by one", "Sets i to zero", "Increases i by one", "Deletes i"],
        correct: 2,
    },
    {
        question: "What does i-- do?",
        answers: ["Increases i by one", "Decreases i by one", "Multiplies i by two", "Sets i to ten"],
        correct: 1,
    },
    {
        question: "What is a variable?",
        answers: ["A website image", "A type of loop", "A programming error", "A named place to store a value"],
        correct: 3,
    },
    {
        question: "What is an array used for?",
        answers: [
            "Storing multiple values in one variable",
            "Styling text only",
            "Fixing every error automatically",
            "Connecting a computer to Wi-Fi",
        ],
        correct: 0,
    },
    {
        question: "What is the index of the first element in a JavaScript array?",
        answers: ["1", "-1", "0", "2"],
        correct: 2,
    },
    {
        question: "Which method adds an element to the end of a JavaScript array?",
        answers: ["remove()", "push()", "delete()", "start()"],
        correct: 1,
    },
    {
        question: "What does Math.random() return?",
        answers: [
            "A whole number from 1 to 100",
            "Always the number 1",
            "A random text message",
            "A random number greater than or equal to 0 and less than 1",
        ],
        correct: 3,
    },
    {
        question: "What does Math.floor() do?",
        answers: [
            "Rounds a number down to the nearest integer",
            "Rounds every number up",
            "Converts a number to a string",
            "Generates a random array",
        ],
        correct: 0,
    },
    {
        question: "What does document.getElementById() do?",
        answers: [
            "Creates a new programming language",
            "Deletes the entire webpage",
            "Finds an HTML element by its ID",
            "Generates a random number",
        ],
        correct: 2,
    },
    {
        question: "Which JavaScript method adds a click event listener?",
        answers: ["getElementById()", "addEventListener()", "queryText()", "createStyle()"],
        correct: 1,
    },
    {
        question: "What does textContent do?",
        answers: [
            "Creates a random number",
            "Changes the browser's language",
            "Deletes JavaScript variables",
            "Gets or sets the text content of an element",
        ],
        correct: 3,
    },
    {
        question: "What does a function do?",
        answers: [
            "Groups reusable instructions",
            "Only changes text color",
            "Automatically fixes all bugs",
            "Stores images in CSS",
        ],
        correct: 0,
    },
    {
        question: "What does the return keyword do in a function?",
        answers: [
            "Repeats the function forever",
            "Changes the page background",
            "Sends a value back from the function",
            "Creates an HTML element automatically",
        ],
        correct: 2,
    },
    {
        question: "What is a syntax error?",
        answers: [
            "A correct program result",
            "A mistake in the code's writing rules",
            "A website color",
            "A type of computer screen",
        ],
        correct: 1,
    },
    {
        question: "What is the purpose of testing a program?",
        answers: [
            "To make the code longer",
            "To remove all variables",
            "To change every color",
            "To check whether the program works correctly",
        ],
        correct: 3,
    },
    {
        question: "Which is the best example of an algorithm?",
        answers: [
            "Following steps in a recipe to prepare food",
            "Randomly pressing keyboard keys",
            "Ignoring a problem",
            "Changing a screen's brightness",
        ],
        correct: 0,
    },
    {
        question: "Which are the four main concepts of computational thinking?",
        answers: [
            "Coding, typing, browsing, and saving",
            "Decomposition, pattern recognition, abstraction, and algorithms",
            "HTML, CSS, Java, and Python",
            "Reading, writing, drawing, and speaking",
        ],
        correct: 1,
    },
    {
        question: "Why is decomposition useful when solving a problem?",
        answers: [
            "It makes every problem more complicated",
            "It removes the need to think",
            "It breaks a large problem into smaller, manageable parts",
            "It automatically writes the code",
        ],
        correct: 2,
    },
    {
        question: "A student notices that several math problems use the same solving steps. Which concept is this?",
        answers: ["Pattern recognition", "Abstraction", "Debugging", "Decomposition"],
        correct: 0,
    },
    {
        question:
            "A weather app displays the temperature but hides unrelated information. Which concept does this demonstrate?",
        answers: ["Decomposition", "Iteration", "Pattern recognition", "Abstraction"],
        correct: 3,
    },
    {
        question: "What should you do first when solving a problem using computational thinking?",
        answers: [
            "Write random code",
            "Understand and identify the problem",
            "Delete unnecessary programs",
            "Choose colors for the interface",
        ],
        correct: 1,
    },
    {
        question: "Which of the following is an example of an algorithm in everyday life?",
        answers: [
            "Looking at a picture",
            "Listening to music without a plan",
            "Following step-by-step instructions to brush your teeth",
            "Opening random applications",
        ],
        correct: 2,
    },
    {
        question: "How does pattern recognition help in programming?",
        answers: [
            "It helps identify similarities that can be solved using similar methods",
            "It prevents programs from using variables",
            "It removes every instruction",
            "It makes errors impossible",
        ],
        correct: 0,
    },
    {
        question:
            "A student divides a school project into research, writing, designing, and presenting. Which concept is being used?",
        answers: ["Abstraction", "Pattern recognition", "Debugging", "Decomposition"],
        correct: 3,
    },
    {
        question: "Why is logical thinking important in computational thinking?",
        answers: [
            "It makes computers run without electricity",
            "It helps organize steps and make decisions based on conditions",
            "It replaces the need to solve problems",
            "It automatically creates websites",
        ],
        correct: 1,
    },
    {
        question: "What is the main goal of computational thinking?",
        answers: [
            "To memorize every programming language",
            "To use a computer for every activity",
            "To develop clear, organized, and effective ways to solve problems",
            "To avoid breaking problems into smaller parts",
        ],
        correct: 2,
    },
];

const quizIntro = document.getElementById("quizIntro");
const quizLayout = document.getElementById("quizLayout");
const quizResult = document.getElementById("quizResult");
const startBtn = document.getElementById("startQuizBtn");
const questionText = document.getElementById("questionText");
const answerList = document.getElementById("answerList");
const questionCount = document.getElementById("questionCount");
const quizCategory = document.getElementById("quizCategory");
const answerFeedback = document.getElementById("answerFeedback");
const scoreText = document.getElementById("scoreText");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const progressFill = document.getElementById("progressFill");
const progressDots = document.getElementById("progressDots");
const questionNavigation = document.getElementById("questionNavigation");

let activeQuestions = [];
let questionOrder = [];
let currentIndex = 0;
let score = 0;
let userAnswers = [];
let quizStarted = false;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));

        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }

    return array;
}

function getRandomQuestions(allQuestions, count = 10) {
    const shuffledQuestions = [...allQuestions];

    shuffleArray(shuffledQuestions);

    return shuffledQuestions.slice(0, Math.min(count, shuffledQuestions.length));
}

function startQuiz() {
    if (!quizLayout) return;

    activeQuestions = getRandomQuestions(questions, 10);

    questionOrder = activeQuestions.map((_, index) => index);
    shuffleArray(questionOrder);

    currentIndex = 0;
    score = 0;
    userAnswers = Array(activeQuestions.length).fill(null);
    quizStarted = true;

    quizLayout.hidden = false;
    quizLayout.classList.remove("quiz-locked");

    if (quizIntro) quizIntro.hidden = false;
    if (quizResult) quizResult.hidden = true;

    createProgressDots();
    createQuestionNavigation();
    showQuestion();
}

function showQuestion() {
    if (!questionText || !answerList || activeQuestions.length === 0) {
        return;
    }

    const actualIndex = questionOrder[currentIndex];
    const question = activeQuestions[actualIndex];

    questionText.textContent = question.question;

    if (questionCount) {
        questionCount.textContent = `QUESTION ${currentIndex + 1} / ${activeQuestions.length}`;
    }

    if (quizCategory) {
        quizCategory.textContent = "Computational Thinking";
    }

    answerList.innerHTML = "";

    if (answerFeedback) {
        answerFeedback.textContent = "";
        answerFeedback.className = "";
    }

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "answer-btn";
        button.textContent = answer;

        button.addEventListener("click", () => selectAnswer(index));

        answerList.appendChild(button);
    });

    if (userAnswers[actualIndex] !== null) {
        showSavedAnswer();
    }

    updateScore();
    updateProgress();
    updateNavigation();
}

function selectAnswer(selectedIndex) {
    if (!quizStarted) return;

    const actualIndex = questionOrder[currentIndex];

    if (userAnswers[actualIndex] !== null) return;

    userAnswers[actualIndex] = selectedIndex;

    const correctIndex = activeQuestions[actualIndex].correct;
    const buttons = answerList.querySelectorAll(".answer-btn");

    buttons.forEach((button, index) => {
        button.disabled = true;

        if (index === correctIndex) {
            button.classList.add("correct");
        }

        if (index === selectedIndex && selectedIndex !== correctIndex) {
            button.classList.add("incorrect");
        }
    });

    if (selectedIndex === correctIndex) {
        score++;

        if (answerFeedback) {
            answerFeedback.textContent = "Correct! Well done.";
            answerFeedback.className = "answer-feedback correct-feedback";
        }
    } else if (answerFeedback) {
        answerFeedback.textContent = `Incorrect. Correct answer: ${activeQuestions[actualIndex].answers[correctIndex]}`;

        answerFeedback.className = "answer-feedback incorrect-feedback";
    }

    updateScore();
    updateProgress();
    updateNavigation();
}

function showSavedAnswer() {
    const actualIndex = questionOrder[currentIndex];
    const selectedIndex = userAnswers[actualIndex];
    const correctIndex = activeQuestions[actualIndex].correct;

    const buttons = answerList.querySelectorAll(".answer-btn");

    buttons.forEach((button, index) => {
        button.disabled = true;

        if (index === correctIndex) {
            button.classList.add("correct");
        }

        if (index === selectedIndex && selectedIndex !== correctIndex) {
            button.classList.add("incorrect");
        }
    });

    if (answerFeedback) {
        if (selectedIndex === correctIndex) {
            answerFeedback.textContent = "Correct! Well done.";
            answerFeedback.className = "answer-feedback correct-feedback";
        } else {
            answerFeedback.textContent = `Incorrect. Correct answer: ${
                activeQuestions[actualIndex].answers[correctIndex]
            }`;

            answerFeedback.className = "answer-feedback incorrect-feedback";
        }
    }
}

function updateScore() {
    if (scoreText) {
        scoreText.textContent = `${score} / ${activeQuestions.length}`;
    }
}

function updateProgress() {
    const totalQuestions = activeQuestions.length;

    if (totalQuestions === 0) return;

    const answeredCount = userAnswers.filter(answer => answer !== null).length;

    const percentage = (answeredCount / totalQuestions) * 100;

    if (progressFill) {
        progressFill.style.width = `${percentage}%`;
    }

    if (progressDots) {
        const dots = progressDots.querySelectorAll(".progress-dot");

        dots.forEach((dot, index) => {
            const actualIndex = questionOrder[index];

            dot.classList.toggle("answered", userAnswers[actualIndex] !== null);

            dot.classList.toggle("current", index === currentIndex);
        });
    }

    if (questionNavigation) {
        const items = questionNavigation.querySelectorAll(".question-nav-item");

        items.forEach((item, index) => {
            const actualIndex = questionOrder[index];

            item.classList.toggle("answered", userAnswers[actualIndex] !== null);

            item.classList.toggle("current", index === currentIndex);
        });
    }
}

function createProgressDots() {
    if (!progressDots) return;

    progressDots.innerHTML = "";

    activeQuestions.forEach((_, index) => {
        const dot = document.createElement("button");

        dot.type = "button";
        dot.className = "progress-dot";
        dot.textContent = index + 1;

        dot.setAttribute("aria-label", `Go to question ${index + 1}`);

        dot.addEventListener("click", () => {
            currentIndex = index;
            showQuestion();
        });

        progressDots.appendChild(dot);
    });
}

function createQuestionNavigation() {
    if (!questionNavigation) return;

    questionNavigation.innerHTML = "";

    activeQuestions.forEach((_, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "question-nav-item";
        button.textContent = index + 1;

        button.addEventListener("click", () => {
            currentIndex = index;
            showQuestion();
        });

        questionNavigation.appendChild(button);
    });
}

function updateNavigation() {
    if (prevBtn) {
        prevBtn.disabled = currentIndex === 0;
    }

    if (nextBtn) {
        nextBtn.textContent = currentIndex === activeQuestions.length - 1 ? "Finish →" : "Next →";

        const actualIndex = questionOrder[currentIndex];

        nextBtn.disabled = userAnswers[actualIndex] === null;
    }
}

function nextQuestion() {
    if (!quizStarted) return;

    const actualIndex = questionOrder[currentIndex];

    if (userAnswers[actualIndex] === null) return;

    if (currentIndex < activeQuestions.length - 1) {
        currentIndex++;
        showQuestion();
    } else {
        finishQuiz();
    }
}

function previousQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        showQuestion();
    }
}

const REVIEW_ICONS = {
    right: '<svg viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M4.5 10.5 8.2 14.2 15.5 6"/></svg>',
    wrong: '<svg viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M5.5 5.5 14.5 14.5M14.5 5.5 5.5 14.5"/></svg>',
};

function escapeHtml(value) {
    const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };

    return String(value).replace(/[&<>"]/g, char => entities[char]);
}

function buildReviewList() {
    return questionOrder
        .map((actualIndex, position) => {
            const item = activeQuestions[actualIndex];
            const picked = userAnswers[actualIndex];
            const isCorrect = picked === item.correct;
            const pickedText = picked === null || picked === undefined ? "Not answered" : item.answers[picked];

            return `
                <li class="review-item ${isCorrect ? "is-right" : "is-wrong"}">
                    <span class="review-mark">${isCorrect ? REVIEW_ICONS.right : REVIEW_ICONS.wrong}</span>
                    <div class="review-text">
                        <p class="review-q"><span>${String(position + 1).padStart(2, "0")}</span>${escapeHtml(item.question)}</p>
                        <p class="review-a">Your answer: ${escapeHtml(pickedText)}</p>
                        ${isCorrect ? "" : `<p class="review-fix">Correct answer: ${escapeHtml(item.answers[item.correct])}</p>`}
                    </div>
                </li>
            `;
        })
        .join("");
}

function finishQuiz() {
    quizStarted = false;

    if (quizLayout) {
        quizLayout.hidden = true;
    }

    if (quizIntro) {
        quizIntro.hidden = true;
    }

    if (!quizResult) return;

    quizResult.hidden = false;

    const totalQuestions = activeQuestions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    const missed = totalQuestions - score;
    const tier = percentage >= 80 ? "high" : percentage >= 50 ? "mid" : "low";
    const grades = {
        high: { heading: "Excellent work", message: "You understand the concepts well." },
        mid: { heading: "Good effort", message: "You are close. Review the ones you missed and go again." },
        low: {
            heading: "Keep learning",
            message: "Start with the four core concepts, then come back and try this quiz again.",
        },
    };

    quizResult.className = `quiz-result tier-${tier}`;

    quizResult.innerHTML = `
        <div class="result-head">
            <div class="result-ring" style="--ring:${percentage}">
                <svg viewBox="0 0 120 120" aria-hidden="true" focusable="false">
                    <circle class="ring-track" cx="60" cy="60" r="52"></circle>
                    <circle class="ring-value" cx="60" cy="60" r="52"></circle>
                </svg>
                <p class="ring-value-text">${percentage}<span>%</span></p>
                <p class="ring-sub">${score} of ${totalQuestions}</p>
            </div>

            <div class="result-copy">
                <p class="section-label">QUIZ COMPLETED</p>
                <h2>${grades[tier].heading}</h2>
                <p class="result-message">${grades[tier].message}</p>

                <dl class="result-stats">
                    <div><dt>Correct</dt><dd>${score}</dd></div>
                    <div><dt>Missed</dt><dd>${missed}</dd></div>
                    <div><dt>Total</dt><dd>${totalQuestions}</dd></div>
                </dl>
            </div>
        </div>

        <div class="result-actions">
            <button type="button" id="restartQuizBtn" class="restart-quiz-btn">Try again ↻</button>
            <button type="button" id="reviewToggle" class="review-toggle" aria-expanded="false" aria-controls="resultReview">
                Review answers
            </button>
            <a class="result-link" href="../html_pages/home.html#concepts">Back to the core concepts</a>
        </div>

        <ol class="result-review" id="resultReview" hidden>${buildReviewList()}</ol>
    `;

    const restartBtn = document.getElementById("restartQuizBtn");

    if (restartBtn) {
        restartBtn.addEventListener("click", startQuiz);
    }

    const reviewBtn = document.getElementById("reviewToggle");
    const reviewList = document.getElementById("resultReview");

    if (reviewBtn && reviewList) {
        reviewBtn.addEventListener("click", () => {
            const open = reviewBtn.getAttribute("aria-expanded") !== "true";

            reviewBtn.setAttribute("aria-expanded", String(open));
            reviewBtn.textContent = open ? "Hide answers" : "Review answers";
            reviewList.hidden = !open;
        });
    }
}

if (startBtn) {
    startBtn.addEventListener("click", startQuiz);
}

if (nextBtn) {
    nextBtn.addEventListener("click", nextQuestion);
}

if (prevBtn) {
    prevBtn.addEventListener("click", previousQuestion);
}

activeQuestions = getRandomQuestions(questions, 10);

questionOrder = activeQuestions.map((_, index) => index);
shuffleArray(questionOrder);

userAnswers = Array(activeQuestions.length).fill(null);

if (quizIntro) {
    quizIntro.hidden = false;
}

if (quizLayout) {
    quizLayout.hidden = false;
    quizLayout.classList.add("quiz-locked");
}

if (quizResult) {
    quizResult.hidden = true;
}

createProgressDots();
createQuestionNavigation();
showQuestion();
