'use strict';

let secretNumber = getRandomNumber();

let score = 20;

let highScore = 0;

function getRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const changeBodyColor = color => {
  document.querySelector('body').style.backgroundColor = color;
};

const changeColorOfButtons = (color1, color2) => {
  document.querySelector('.check').style.backgroundColor = color1;
  document.querySelector('.check').style.color = color2;
};

const changeScore = (className, score) => {
  document.querySelector(className).textContent = score;
};

const changeSecretNumber = text => {
  document.querySelector('.number').textContent = text;
};

const changeWidthOfElementSecretNumber = value => {
  document.querySelector('.number').style.width = value;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('Not a number or outside the range of numbers 1 - 20!');
  } else if (guess === secretNumber) {
    displayMessage('Correct number!');
    changeBodyColor('#60b347');
    changeSecretNumber(secretNumber);
    changeWidthOfElementSecretNumber('30rem');
    document.querySelector('.check').setAttribute('blocked', 'blocked');
    changeColorOfButtons('#F08080', '#000');
    if (score > highScore) {
      highScore = score;
      changeScore('.highscore', highScore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      changeScore('.score', score);
    } else {
      displayMessage('You lost the game!');
      changeBodyColor('#FF0000');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = getRandomNumber();
  changeScore('.score', score);
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  changeBodyColor('#222');
  changeSecretNumber('?');
  changeWidthOfElementSecretNumber('15rem');
  document.querySelector('.check').removeAttribute('blocked');
  changeColorOfButtons('#eee', '#222');
});
