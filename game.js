// This is a game (QuickQuiz) I will develop

// more code Im writing

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);

let currentQuestion = {};
let acceptingAnswers = true;
let acore =0;
let questionCounter =0;
let availableQuesions =[];

