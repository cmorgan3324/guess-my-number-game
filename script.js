'use strict';
/*
console.log(document.querySelector('.message').textContent); //.querySelector is a method to select/reference HTML elements; '.message' is javascript class selector referencing the HTML element (<p>) with class named "message" (<p class="message">Start guessing...</p>);
//.textContent references/reads/gets text within element selected by previous class selector( i.e. "Start guessing... ")

//DOM- Document Object Model; connection between HTML documents and javascript

document.querySelector('.message').textContent = 'Correct Number!!'; //Sets previous text to "Correct Number!!"

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
//.value gets value of selected element
document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1; //Math.random gives random number between 0 and 1 (multiply 20 to get between between 0 and 19.999999); Math.trunc removes decimals (add one to get between 0 and 20)

let score = 20;
let highscore = 0; //highScore variable keeps track of highscore

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //'.check' differentiates the two ".btn" classes in HTML;
  //.addEventListener attaches event handler (name of event that's being listened for (click), function(){expression})
  //function body {const guess...} tells DOM what to do only when event (click) happens.
  console.log(guess, typeof guess);

  //When there is no input:
  if (!guess) {
    //!guess (no guess); when input is blank, guess is 0 and 0 is falsy value, it will be false, which is why the negation operator(!) makes it true in order for the following line to execute when there is a blank or 0.
    // document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No Number!');
  }
  //When player wins:
  else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = 'Correct Number!!';
    displayMessage('Correct Number!!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347'; //specify .style then .(CSS property) for inline styling with JS
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore; //checks if current score is greater than highscore, if it is, we set the current score to the new high score
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //Registers loss on 0 instead of 1 on final click.
      //document.querySelector('.message').textContent = guess > secretNumber ? 'Too High!' : 'Too Low!'; //Ternary option to unify too high option and too low; which is when the guess is DIFFERENT than secretNumber.
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--; //Decreases score when guess is wrong
      document.querySelector('.score').textContent = score; //displays new score in score element
    } else {
      //document.querySelector('.message').textContent = 'You Lose !'; //Displays You Lose when score reaches 0
      displayMessage('You Lose');
      document.querySelector('.score').textContent = 0; //Allows 'You lose' to display on final click.
    }
  }

  // //When guess is too high:
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     //Registers loss on 0 instead of 1 on final click.
  //     document.querySelector('.message').textContent = 'Too High!';
  //     score--; //Decreases score when guess is wrong
  //     document.querySelector('.score').textContent = score; //displays new score in score element
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lose !'; //Displays You Lose when score reaches 0
  //     document.querySelector('.score').textContent = 0; //Allows 'You lose' to display on final click.
  //   }
  // }
  // //When guess is too low:
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low...';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lose !';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

//Play again button functionality; resets initial settings
document.querySelector('.again').addEventListener('click', function () {
  score = 20; //resets score value
  secretNumber = Math.trunc(Math.random() * 20) + 1; //resets secret number

  document.querySelector('.score').textContent = '20'; //resets score text
  document.querySelector('.number').textContent = '?'; //resets secret number text
  document.querySelector('.guess').value = ''; //resets input to empty
  displayMessage('Start guessing...');
  //document.querySelector('.message').textContent = 'Start guessing...'; //resets message to default
  document.querySelector('.number').style.width = '15rem'; //secret box width
  document.querySelector('body').style.backgroundColor = '#222'; //resets background color
});
