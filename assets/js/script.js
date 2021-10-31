
// // start score from 0
// var score = 0;
// var scoreIncrement = 10;

// // select 'start quiz' button 
// var startQuizBtn = document.querySelector("#start-quiz-btn");
// // select div containerelement
// var mainEl = document.querySelector("#introduction");
// //
// var questionEl = document.querySelector(".question-container");

// var questionHeading = document.querySelector("#questions");
// var answerList = document.querySelector("#answer-list");

// var displayedQuestion = 0;

 // start the countdown from 75
 var timerEl = document.querySelector("#timer");
 var seconds = 75;
 var secondsDeduction = 10;


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


const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
  startTimer()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Commonly used data types DO NOT include:',
    answers: [
      { text: 'booleans', correct: true },
      { text: 'strings', correct: false },
      { text: 'alerts', correct: false },
      { text: 'numbers', correct: false }
    ]
  },
  {
    question: 'The condition in an if/else statement is enclosed with ______.',
    answers: [
      { text: 'quotes', correct: true },
      { text: 'curly brackets', correct: true },
      { text: 'parenthesis', correct: true },
      { text: 'square brackets', correct: true }
    ]
  },
  {
    question: 'Arrays in Javascript can be used to store ______',
    answers: [
      { text: 'all of the above', correct: false },
      { text: 'other arrays', correct: true },
      { text: 'booleans', correct: false },
      { text: 'numbers and strings', correct: false }
    ]
  },
  {
    question: 'String values must be enclosed within _____ when being assigned to variables.',
    answers: [
      { text: 'quotes', correct: false },
      { text: 'commas', correct: true },
      { text: 'curly brackets', correct: false },
      { text: 'parenthesis', correct: true }
    ]
  },
  {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is',
    answers: [
      { text: 'console.log', correct: false },
      { text: 'javascript', correct: true },
      { text: 'terminal/bash', correct: false },
      { text: 'for loops', correct: true }
    ]
  }
]