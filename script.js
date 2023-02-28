'use strict';

/*
console.log(document.querySelector('.message')); // this will actually select the whole element

// to select the text content
console.log(document.querySelector('.message').textContent);

// to mainpulate the text content of .message class
document.querySelector('.message').textContent = 'Correct Value!';

// Accessing the question mark
document.querySelector('.number').textContent = 23;

// Accessing the score
document.querySelector('.score').textContent = 10;

// Accessing the input field
document.querySelector('.guess').value = 18;

console.log((document.querySelector('.guess').value = 18));
*/

// creating a random num and storing it
let randomNum = Math.trunc(Math.random() * 20) + 1;
// getting the score to manipulate it on each guess
let score = 20;
let highScore = 0;

// function for message displaying to reduce the repeataility
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// this the event listner and the function is the event handler.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //   If the user did not provide any input
  if (!guess) {
    displayMessage('No input!😒');
    // document.querySelector('.message').textContent = 'No input!😒';
    // If the user enters the correct input
  } else if (guess === randomNum) {
    displayMessage('Correct Guess!😍');
    // document.querySelector('.message').textContent = 'Correct Guess!😍';
    // Manipulating the CSS STYLE if the user wins.
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = randomNum;
    // code for highScore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess != randomNum) {
    if (score > 0) {
      displayMessage(guess < randomNum ? 'Too Low!😂' : 'Too High!😂');
      // document.querySelector('.message').textContent =
      // guess < randomNum ? 'Too Low!😂' : 'Too High!😂';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost the Game!');
      // document.querySelector('.message').textContent = 'You Lost the Game!';
    }
  }
  // if the user enters a number less than the crct num.
  //    else if (guess < randomNum) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = 'Too Low!😂';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost the Game!';
  //   }
  //   // If the user enters the number greater than the crct num.
  // } else if (guess > randomNum) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = 'Too High!😂';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost the Game!';
  //   }
  // }
});

// we are creating another event handler for the reset button
document.querySelector('.again').addEventListener('click', function () {
  // restoring the initial values
  score = 20;
  document.querySelector('.score').textContent = 20;
  displayMessage('Start guessing');
  // document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  randomNum = Math.trunc(Math.random() * 20) + 1;
  // restoring the color and width styles
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
