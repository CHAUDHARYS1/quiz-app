// start quiz btn will take user to their first question
// once start quiz btn is clicked - the timer starts
// each question has a 60 second timer.
// If user answers the question wrong, they lose 10 seconds out of 60 second timer.
// when all questions are answered or timer reaches 0 for any question - the game is over. 
// when game is over - save user score.

var questions = [{
        q: 'Commonly used data types DO NOT include',
        a: 'boolean',
        b: 'argument',
        c: 'test',
        d: 'param'
    },
    {
        q: 'The condition in an if/else statement is enclosed with ______.',
        a: 'parenthesis'
    },
    {
        q: 'Arrays in Javascript can be used to store ______',
        a: 'all of the above'
    },
    {
        q: 'String values must be enclosed within _____ when being assigned to variables.',
        a: 'quotes'
    },
    {
        q: 'A very useful tool used during development and debugging for printing content to the debugger is',
        a: 'console.log'
    },
]

// start score from 0
var score = 0;

// start timer at 75
var timer = 75;

// select 'start quiz' button 
var startQuizBtn = document.querySelector("#start-quiz-btn");
// select div containerelement
var mainEl = document.querySelector("#introduction");
//
var questionEl = document.querySelector(".question-container");

var questionHeading = document.querySelector("#questions");
var answerList = document.querySelector("#answer-list");

var displayedQuestion = 0;

// start the quiz when 'Start Quiz' button is pressed
function startQuiz() {
    mainEl.style.display = 'none';
    questionEl.style.display = 'block';

    renderQuestion(questions[displayedQuestion]);
}

function renderQuestion(question) {
    questionHeading.innerHTML = question.q;
    // answerList.innerHTML = question.a;

    var answerListOneEl = document.createElement("li");
    answerListOneEl.innerHTML = question.a;

    var answerListTwoEl = document.createElement("li");
    answerListTwoEl.innerHTML = question.b;

    var answerListThreeEl = document.createElement("li");
    answerListThreeEl.innerHTML = question.c;

    var answerListFourEl = document.createElement("li");
    answerListFourEl.innerHTML = question.d;

    answerList.append(answerListOneEl, answerListTwoEl, answerListThreeEl, answerListFourEl);
}

function nextQuestion(e) {
    var usersChoice = e.target.textContent;
    console.log(usersChoice);

    if (usersChoice === questions[displayedQuestion].a) {

    } else {

    }

    displayedQuestion++;
    // after line, call renderQuestion(questions[displayedQuestions])
}

answerList.addEventListener("click", nextQuestion);
startQuizBtn.addEventListener("click", startQuiz);