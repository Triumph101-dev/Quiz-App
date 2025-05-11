
const questions = [
  {
    question: "What does HTML stand for?",
    choices: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "What does CSS stand for?",
    choices: ["Colorful Style Sheets", "Cascading Style Sheets", "Creative Style Sheets"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which language runs in the browser?",
    choices: ["Python", "Java", "JavaScript"],
    answer: "JavaScript"
  }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const scoreEl = document.getElementById('score');
const nextBtn = document.getElementById('next');

function loadQuestion() {
  const q = questions[current];
  questionEl.textContent = q.question;
  choicesEl.innerHTML = '';
  q.choices.forEach(choice => {
    const li = document.createElement('li');
    li.textContent = choice;
    li.onclick = () => checkAnswer(choice);
    choicesEl.appendChild(li);
  });
}

function checkAnswer(choice) {
  if (choice === questions[current].answer) {
    score++;
  }
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  quiz.innerHTML = '';
  scoreEl.textContent = `You scored ${score} out of ${questions.length}`;
}

nextBtn.onclick = () => {
  if (current < questions.length) {
    loadQuestion();
  }
};

loadQuestion();