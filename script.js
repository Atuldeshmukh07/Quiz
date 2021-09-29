const quizDB = [
  {
    question: "Q1: Inside which HTML element do we put the JavaScript?",
    a: "<script>",
    b: "<javascript>",
    c: "<scripting>",
    d: "<scripted>",
    ans: "ans1",
  },
  {
    question:
      "Q2: What is the correct HTML element for inserting a line break?",
    a: "<break>",
    b: "<li>",
    c: "<ul>",
    d: "<br>",
    ans: "ans4",
  },
  {
    question: "Q3: What does CSS stand for?",
    a: "Cascading Style Sheets",
    b: "Colourful Style Sheets",
    c: "Computer Style Sheets",
    d: "Creative Style Sheets",
    ans: "ans1",
  },
  {
    question: "Q4: Which property is used to change the background color?",
    a: "color",
    b: "background-color",
    c: "bgcolor",
    d: "background color",
    ans: "ans2",
  },
  {
    question: "Q5: Which type of JavaScript language is ___",
    a: "Object-Oriented",
    b: "Object-Based",
    c: "Assembly-language",
    d: "High-level",
    ans: "ans2",
  },
  {
    question: "Q6: Which of the following variables takes precedence over the others if the names are the same?",
    a: "Global variable",
    b: "The local element",
    c: "The two of the above",
    d: "None of the above",
    ans: "ans2",
  },
  {
    question: `Q7: The "function" and " var" are known as: `,
    a: "Keywords",
    b: "Data types",
    c: "Declaration statements",
    d: "Prototypes",
    ans: "ans3",
  },
  {
    question: "Q8: Which of the following number object function returns the value of the number?",
    a: "toString()",
    b: "valueOf()",
    c: "toLocaleString()",
    d: "toPrecision()",
    ans: "ans2",
  },
  {
    question: "Q9: In JavaScript the x===y statement implies that:",
    a: "Both x and y are equal in value, type and reference address as well.",
    b: "Both are x and y are equal in value only.",
    c: "Both are equal in the value and data type.",
    d: "Both are not same at all.",
    ans: "ans3",
  },
  {
    question: "Q10: The CSS property used to control the element's font-size is -",
    a: "text-style",
    b: "text-size",
    c: "font-size",
    d: "None of the above",
    ans: "ans3",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  const questionList = quizDB[questionCount];

  question.innerText = questionList.question;

  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};

loadQuestion();

const getCheckAnswer = () => {
  let answer;

  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};

const deselectAll = () => {
  answers.forEach((curAnsElem) => (curAnsElem.checked = false));
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);

  if (checkedAnswer === quizDB[questionCount].ans) {
    score++;
  }

  questionCount++;

  deselectAll();

  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
<h3> You scored ${score}/${quizDB.length} ✌ </h3>
<button class="btn" onclick="location.reload()"> Play Again </button>
`;

    showScore.classList.remove("scoreArea");
  }
});
