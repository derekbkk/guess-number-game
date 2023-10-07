'use strict';

const number = document.querySelector('.number');
const guessBtn = document.querySelector('.guess'); // input field value
const checkBtn = document.querySelector('.check');
const body = document.querySelector('body');
const again = document.querySelector('.again');
const displayScore = document.querySelector('.score');
const displayHighScore = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

checkBtn.addEventListener('click', function () {
  const guess = Number(guessBtn.value);

  if (!guess) {
    // No guess
    displayMessage('⛔️ No Number!');

    // Player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    number.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      displayHighScore.textContent = highScore;
    }
    // When guess if wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // Guess too high
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too Low!');
      score--;
      displayScore.textContent = score;
    } else {
      // Lose game
      displayMessage('You lost the game! 💥');
      displayScore.textContent = 0;
    }
  }
});

again.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  displayScore.textContent = score;
  number.textContent = '?';
  guessBtn.value = '';

  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
});
