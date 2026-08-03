const quiz = [
    {
        question: "What language is used for styling web pages?",
        options: ["HTML", "JavaScript", "CSS", "Python"],
        answer: "CSS"
    },
    {
        question: "What keyword is used to declare a variable?",
        options: ["variable", "let", "const", "new"],
        answer: "let"
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Netscape", "Microsoft", "Google", "Apple"],
        answer: "Netscape"
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: ["//", "/* */", "#", "<!-- -->"],
        answer: "//"
    }
]

let index = 0;
let score = 0;
let time = 30;

const question = document.getElementById("question");
const options = document.getElementById("options");
const result = document.getElementById("result");
const timer = document.getElementById("timer");

function loadQuestion() {
    question.innerHTML = quiz[index].question;
    options.innerHTML = "";

    quiz[index].options.forEach(option => {
        options.innerHTML += `
            <label>
                <input type="radio" name="ans" value="${option}">
                ${option}
            </label><br>
        `;
    });
}

function nextQuestion() {

    const selected = document.querySelector('input[name="ans"]:checked');

    if (selected && selected.value === quiz[index].answer) {
        score++;
    }

    index++;

    if (index < quiz.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    question.innerHTML = "";
    options.innerHTML = "";
    result.innerHTML = `Your Score: ${score} / ${quiz.length}`;
    clearInterval(timerInterval);
}

loadQuestion();

const timerInterval = setInterval(() => {
    time--;
    timer.innerHTML = "Time: " + time;

    if (time <= 0) {
        clearInterval(timerInterval);
        endQuiz();
        result.innerHTML += "<br>Time's Up!";
    }
}, 1000);