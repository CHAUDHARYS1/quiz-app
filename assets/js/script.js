// start quiz btn will take user to their first question
// once start quiz btn is clicked - the timer starts
// each question has a 60 second timer.
// If user answers the question wrong, they lose 10 seconds out of 60 second timer.
// when all questions are answered or timer reaches 0 for any question - the game is over. 
// when game is over - save user score.

var questions = [
    { q: 'Commonly used data types DO NOT include', a: 'boolean' },
    { q: 'The condition in an if/else statement is enclosed with ______.', a: 'parenthesis' },
    { q: 'Arrays in Javascript can be used to store ______', a: 'all of the above' },
    { q: 'String values must be enclosed within _____ when being assigned to variables.', a: 'quotes' },
    { q: 'A very useful tool used during development and debugging for printing content to the debugger is', a: 'console.log' },
] 

// start score from 0
var score = 0;

// start timer at 75
var timer = 75;
var startQuizBtn = document.querySelector("#start-quiz-btn");
var mainEl = document.querySelector("main");

// start the quiz when 'Start Quiz' button is pressed
var startQuiz = function(){
    console.log("I was clicked");
}

var createQuizMainEl = function(){
    var mainDivEl = document.createElement("main");
    mainDivEl.innerHTML = "<h2>Hi Its me </h2";

    var mainHeadingEl = document.createElement("h1");
    mainHeadingEl.className = "main-h1";
    mainHeadingEl.innerHTML = "JavaScript Quiz Challenge";
    mainHeadingEl.appendChild(mainDivEl);

}
createQuizMainEl();
startQuizBtn.addEventListener("click", startQuiz);
