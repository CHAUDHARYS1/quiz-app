// start quiz btn will take user to their first question
// once start quiz btn is clicked - the timer starts
// each question has a 60 second timer.
// If user answers the question wrong, they lose 10 seconds out of 60 second timer.
// when all questions are answered or timer reaches 0 for any question - the game is over. 
// when game is over - save user score.

var questions = [{
        q: 'Commonly used data types DO NOT include',
        a: 'booleans',
        b: 'strings',
        c: 'alerts',
        d: 'numbers'
    },
    {
        q: 'The condition in an if/else statement is enclosed with ______.',
        a: 'quotes',
        b: 'curly brackets',
        c: 'parenthesis',
        d: 'square brackets'
    },
    {
        q: 'Arrays in Javascript can be used to store ______',
        a: 'all of the above',
        b: 'other arrays',
        c: 'booleans',
        d: 'numbers and strings'
    },
    {
        q: 'String values must be enclosed within _____ when being assigned to variables.',
        a: 'quotes',
        b: 'commas',
        c: 'curly brackets',
        d: 'parenthesis'
    },
    {
        q: 'A very useful tool used during development and debugging for printing content to the debugger is',
        a: 'console.log',
        b: 'javascript',
        c: 'terminal/bash',
        d: 'for loops'
    },
]

// start score from 0
var score = 0;
var scoreIncrement = 10;

// select 'start quiz' button 
var startQuizBtn = document.querySelector("#start-quiz-btn");
// select div containerelement
var mainEl = document.querySelector("#introduction");
//
var questionEl = document.querySelector(".question-container");

var questionHeading = document.querySelector("#questions");
var answerList = document.querySelector("#answer-list");

var displayedQuestion = 0;

 // start the countdown from 75
 var timerEl = document.querySelector("#timer");
 var seconds = 75;
 var secondsDeduction = 10;

// start the quiz when 'Start Quiz' button is pressed
function startQuiz() {
    mainEl.style.display = 'none';
    questionEl.style.display = 'block';
    startTimer();
    renderQuestion(questions[displayedQuestion]);
}
// start timer as soon as 'Start Quiz' button is pressed
function startTimer() {
    // display timer 
    var displayTimer = document.querySelector(".timer");
    displayTimer.style.display = 'block';

   // start the countdown
    var cancel = setInterval(() => {
        if (seconds <= 1) {
            clearInterval(cancel);
        }
        timerEl.innerHTML = `${--seconds}`;
        if (seconds === 0) {
            alert("You ran out of time. Good luck next time!\n\nThe page will now redirect to the main page.");

            // reload the page back the main section
            location.reload();
            return false;
        }
    }, 1000);
}

// render question as soon as 'Start Quiz' button is pressed
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
        alert("Corret answer");
    } else {
        alert('Wrong answer, 10 seconds has been deducted from the countdown.');
        seconds -= secondsDeduction;
        // timerEl.innerText = seconds;
        // timerEl.append(wrongAnswer);
    }

}

answerList.addEventListener("click", nextQuestion);
startQuizBtn.addEventListener("click", startQuiz);