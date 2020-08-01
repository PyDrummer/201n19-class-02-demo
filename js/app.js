'use strict';

var totalScore = 0;

var userName = prompt('Welcome to my guessing game site! Before we start lets get your name:');

confirm('Hi ' + userName + '! You have just entered the guessing game! Please answer all questions with either yes/no or with y/n. If you\'re feeling crazy try a random word and see what happens! Now let\'s begin.');

//First Question
var answerOne = prompt('Is the sky blue?');
var lowerOne = answerOne.toLowerCase();
//Yes answer
function questionOne(anythingOne){
  if (anythingOne === 'yes' || anythingOne === 'y') {
    var correctOne = alert('Correct!');
    totalScore++;
    return correctOne;
  }
  else if (anythingOne === 'no' || anythingOne === 'n') {
    var falseOne = alert('False!');
    return falseOne;
  }
  else {
    var noYes = alert('Not a yes or no answer!');
    return noYes;
  }

}
questionOne(answerOne);

//Second Question
var answerTwo = prompt('A goldfish only has a memory of three seconds.');
var lowerTwo = answerTwo.toLowerCase();
//No answer
function questionTwo(anythingTwo){
  if (anythingTwo === 'yes' || anythingTwo === 'y') {
    var falseTwo = alert('False!');
    return falseTwo;
  }
  else if (anythingTwo === 'no' || anythingTwo === 'n') {
    var correctOne = alert('Correct!');
    totalScore++;
    return correctOne;
  }
  else {
    var noYes = alert('Not a yes or no answer!');
    return noYes;
  }
}
questionTwo(lowerTwo);

//Third Question
var answerThree = prompt('Is flying in an aeroplane safer than driving in a car?');
var lowerThree = answerThree.toLowerCase();
//Yes answer
function questionThree(anythingThree){
  if (anythingThree === 'yes' || anythingThree === 'y') {
    var correctThree = alert('Correct!');
    totalScore++;
    return correctThree;
  }
  else if (anythingThree=== 'no' || anythingThree === 'n') {
    var falseThree = alert('False!');
    return falseThree;
  }
  else {
    var noYes = alert('Not a yes or no answer!');
    return noYes;
  }

}
questionThree(answerThree);

//Fourth Question
var answerFour = prompt('Can a cat jump 6 times it\'s length?');
var lowerFour = answerFour.toLowerCase();
//Yes Answer
function questionFour(anythingFour){
  if (anythingFour === 'yes' || anythingFour === 'y') {
    var correctFour = alert('Correct!');
    totalScore++;
    return correctFour;
  }
  else if (anythingFour === 'no' || anythingFour === 'n') {
    var falseFour = alert('False!');
    return falseFour;
  }
  else {
    var noYes = alert('Not a yes or no answer!');
    return noYes;
  }

}
questionFour(answerFour);

//Fifth Question
var answerFive = prompt('Does an octopus has five hearts?');
var lowerFive = answerFive.toLowerCase();
//No Answer
function questionFive(anythingFive){
  if (anythingFive === 'yes' || anythingFive === 'y') {
    var falseFive = alert('False!');
    return falseFive;
  }
  else if (anythingFive === 'no' || anythingFive === 'n') {
    var correctFive = alert('Correct!');
    totalScore++;
    return correctFive;
  }
  else {
    var noYes = alert('Not a yes or no answer!');
    return noYes;
  }
}
questionFive(lowerFive);

confirm('Let\'s switch it up! The next question is looking for a number instead of a yes/no or y/n answer.');

// Sixth Question
var answerSix = parseInt(prompt('One plus one is: '));
var guessCount = 0;
var allowedAttempts = 4;

function questionSix(anythingSix){
  while (guessCount < allowedAttempts) {
    var numAnswer = 2;
    if (anythingSix === numAnswer) {
      var correctSix = alert('You got it!');
      totalScore++;
      return correctSix;
    }
    else if (anythingSix > numAnswer) {
      alert('Too high!');
      guessCount++;
      anythingSix = parseInt(prompt('One plus one is: '));
    }
    else if (anythingSix < numAnswer) {
      alert('Too low!');
      guessCount++;
      anythingSix = parseInt(prompt('One plus one is: '));
    }
    if (guessCount === allowedAttempts) {
      var tooMany = alert(`Too many guesses, the answer is ${numAnswer}`);
      return tooMany;
    }
  }
}
questionSix(answerSix);

confirm('Okay, time for a multipe choice question! Please answer with either A, B, C or D');
//Question Seven
var answerSeven = prompt('Which of the following are sea-dwelling dinosaurs? A) Argentinosaurus, B) Ammonite, C) Megalodon, D) Answers B and C');
var upperSeven = answerSeven.toUpperCase();
var sevenAnswerArray = ['B', 'C', 'D'];
var mGuessCount = 0;
var mAllowedAttempts = 6;

function questionSeven(anythingSeven){
  while (mGuessCount < mAllowedAttempts) {
    if (anythingSeven !== sevenAnswerArray[0] && anythingSeven !== sevenAnswerArray[1] && anythingSeven !== sevenAnswerArray[2]) {
      alert('Sorry that was incorrect. Try again!');
      anythingSeven = prompt('Which of the following are sea-dwelling dinosaurs? A) Argentinosaurus, B) Ammonite, C) Megalodon, D) Answers B and C').toUpperCase();
      mGuessCount++;
    }
    else {
      var correctSeven = alert('That is correct! the answers are B) Ammonite, C) Megalodon, D) Answers B and C');
      totalScore++;
      return correctSeven;
    }
    if (mGuessCount === mAllowedAttempts) {
      var tooMany = alert(`Too many guesses. The answers were ${sevenAnswerArray[0]}, ${sevenAnswerArray[1]}, ${sevenAnswerArray[2]}.`);
      return tooMany;
    }
  }
}
questionSeven(upperSeven);

//Final Message to User
alert(`Okay, ${userName} the results are in! You answered ${lowerOne}, ${lowerTwo}, ${lowerThree}, ${lowerFour}, ${lowerFive}, ${answerSix} and ${upperSeven}. Thanks for answering all questions! Your total score was ${totalScore} our 7. If you got any wrong and would like to retry, simply refresh the page.`);
