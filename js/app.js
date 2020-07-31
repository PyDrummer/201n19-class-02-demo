'use strict';
//GOALS:
// prompt 5 questions times that accept either yes or no answers
// normalize the user input with .toUpperCase() and .toLowerCase()
// let the user know if they answered correctly with an alert(). Replace the console.log() with alert()

// dont forget to //COMMENT OUT the console.logs before submitting!

// Remember to add commit push to my repo in github
// submit the url of your repo to the assignment

var totalScore = 0;

var userName = prompt('Welcome to my guessing game site! Before we start lets get your name:');
console.log(userName);

var yesNo = confirm('Hi ' + userName + '! You have just entered the guessing game! Please answer all questions with either yes/no or with y/n. If you\'re feeling crazy try a random word and see what happens! Now let\'s begin.');
console.log(yesNo);

//First Question
var answerOne = prompt('Is the sky blue?');
var lowerOne = answerOne.toLowerCase();
console.log(lowerOne);
//Yes answer
function questionOne(anythingOne){
  if (anythingOne === 'yes' || anythingOne === 'y') {
    //console.log('It was true');
    var correctOne = alert('Correct!');
    totalScore++;
    console.log(`current score ${totalScore++}`);
    return correctOne;
  }
  else if (anythingOne === 'no' || anythingOne === 'n') {
    //console.log('It was false');
    var falseOne = alert('False!');
    return falseOne;
  }
  else {
    //console.log('Not a good answer');
    var noYes = alert('Not a yes or no answer!');
    return noYes;
  }

}
questionOne(answerOne);

// old if statement logic.
// if (lowerOne === 'yes' || lowerOne === 'y') {
//   //console.log('It was true');
//   alert('Correct!');
//   totalScore++;
//   console.log(`current score ${totalScore++}`);
// }
// else if (lowerOne === 'no' || lowerOne === 'n') {
//   //console.log('It was false');
//   alert('False!');
// }
// else {
//   //console.log('Not a good answer');
//   alert('Not a yes or no answer!');
// }

//Second Question
var answerTwo = prompt('A goldfish only has a memory of three seconds.');
var lowerTwo = answerTwo.toLowerCase();
console.log(lowerTwo);
//No answer
function questionTwo(anythingTwo){
  if (anythingTwo === 'yes' || anythingTwo === 'y') {
    //console.log('It was true');
    var falseTwo = alert('False!');
    return falseTwo;
  }
  else if (anythingTwo === 'no' || anythingTwo === 'n') {
    //console.log('It was false');
    var correctOne = alert('Correct!');
    totalScore++;
    console.log(`current score ${totalScore++}`);
    return correctOne;
  }
  else {
    //console.log('Not a good answer');
    var noYes = alert('Not a yes or no answer!');
    return noYes;
  }
}
questionTwo(lowerTwo);

// old if statement logic.
// if (lowerTwo === 'yes' || lowerTwo === 'y') {
//   //console.log('It was true');
//   alert('False!');
// }
// else if (lowerTwo === 'no' || lowerTwo === 'n') {
//   //console.log('It was false');
//   alert('Correct!');
//   totalScore++;
// }
// else {
//   //console.log('Not a good answer');
//   alert('Not a yes or no answer!');
// }

//Third Question
var answerThree = prompt('Is flying in an aeroplane safer than driving in a car?');
var lowerThree = answerThree.toLowerCase();
console.log(lowerThree);
//Yes answer
function questionThree(anythingThree){
  if (anythingThree === 'yes' || anythingThree === 'y') {
    //console.log('It was true');
    var correctThree = alert('Correct!');
    totalScore++;
    console.log(`current score ${totalScore++}`);
    return correctThree;
  }
  else if (anythingThree=== 'no' || anythingThree === 'n') {
    //console.log('It was false');
    var falseThree = alert('False!');
    return falseThree;
  }
  else {
    //console.log('Not a good answer');
    var noYes = alert('Not a yes or no answer!');
    return noYes;
  }

}
questionThree(answerThree);

// old if statement logic.
// if (lowerThree === 'yes' || lowerThree === 'y') {
//   //console.log('It was true');
//   alert('Correct!');
//   totalScore++;
// }
// else if (lowerThree === 'no' || lowerThree === 'n') {
//   //console.log('It was false');
//   alert('False!');
// }
// else {
//   //console.log('Not a good answer');
//   alert('Not a yes or no answer!');
// }

//Fourth Question
var answerFour = prompt('Can a cat jump 6 times it\'s length?');
var lowerFour = answerFour.toLowerCase();
console.log(lowerFour);
//Yes Answer
function questionFour(anythingFour){
  if (anythingFour === 'yes' || anythingFour === 'y') {
    //console.log('It was true');
    var correctFour = alert('Correct!');
    totalScore++;
    console.log(`current score ${totalScore++}`);
    return correctFour;
  }
  else if (anythingFour === 'no' || anythingFour === 'n') {
    //console.log('It was false');
    var falseFour = alert('False!');
    return falseFour;
  }
  else {
    //console.log('Not a good answer');
    var noYes = alert('Not a yes or no answer!');
    return noYes;
  }

}
questionFour(answerFour);

// old if statement logic.
// if (lowerFour === 'yes' || lowerFour === 'y') {
//   //console.log('It was true');
//   alert('Correct!');
//   totalScore++;
// }
// else if (lowerFour === 'no' || lowerFour === 'n') {
//   //console.log('It was false');
//   alert('False!');
// }
// else {
//   //console.log('Not a good answer');
//   alert('Not a yes or no answer!');
// }

//Fifth Question
var answerFive = prompt('Does an octopus has five hearts?');
var lowerFive = answerFive.toLowerCase();
console.log(lowerFive);
//No Answer
function questionFive(anythingFive){
  if (anythingFive === 'yes' || anythingFive === 'y') {
    //console.log('It was true');
    var falseFive = alert('False!');
    return falseFive;
  }
  else if (anythingFive === 'no' || anythingFive === 'n') {
    //console.log('It was false');
    var correctFive = alert('Correct!');
    totalScore++;
    console.log(`current score ${totalScore++}`);
    return correctFive;
  }
  else {
    //console.log('Not a good answer');
    var noYes = alert('Not a yes or no answer!');
    return noYes;
  }
}
questionFive(lowerFive);

// old if statement logic.
// if (lowerFive === 'yes' || lowerFive === 'y') {
//   //console.log('It was false');
//   alert('False!');
// }
// else if (lowerFive === 'no' || lowerFive === 'n') {
//   //console.log('It was false');
//   alert('Correct!');
//   totalScore++;
// }
// else {
//   //console.log('Not a good answer');
//   alert('Not a yes or no answer!');
// }

var numTime = confirm('Let\'s switch it up! The next question is looking for a number instead of a yes/no or y/n answer.');
console.log(`${numTime}`);

// Sixth Question
var answerSix = parseInt(prompt('One plus one is: '));
//console.log(typeof answerSix)
console.log(`Answer six is ${answerSix}`);
var guessCount = 0;
var allowedAttempts = 4;

function questionSix(anythingSix){
  while (guessCount < allowedAttempts) {
    console.log(`Answer six2 is ${anythingSix}`);
    //console.log(`Current ${guessCount}`)
    var numAnswer = 2;
    if (anythingSix === numAnswer) {
      var correctSix = alert('You got it!');
      totalScore++;
      console.log(`Score is ${totalScore}.`);
      return correctSix;
      //break;
    }
    else if (anythingSix > numAnswer) {
      alert('Too high!');
      guessCount++;
      console.log(`Current ${guessCount}`);
      anythingSix = parseInt(prompt('One plus one is: '));
    }
    else if (anythingSix < numAnswer) {
      alert('Too low!');
      guessCount++;
      console.log(`Current ${guessCount}`);
      anythingSix = parseInt(prompt('One plus one is: '));
    }
    if (guessCount === allowedAttempts) {
      var tooMany = alert(`Too many guesses, the answer is ${numAnswer}`);
      return tooMany;
      //break;
    }
  }
}
questionSix(answerSix);

// while (guessCount < allowedAttempts) {
//   console.log(`Answer six2 is ${answerSix}`);
//   //console.log(`Current ${guessCount}`)
//   var numAnswer = 2;
//   if (answerSix === numAnswer) {
//     alert('You got it!');
//     totalScore++;
//     console.log(`Score is ${totalScore}.`);
//     break;
//   }
//   else if (answerSix > numAnswer) {
//     alert('Too high!');
//     guessCount++;
//     console.log(`Current ${guessCount}`);
//     answerSix = parseInt(prompt('One plus one is: '));
//   }
//   else if (answerSix < numAnswer) {
//     alert('Too low!');
//     guessCount++;
//     console.log(`Current ${guessCount}`);
//     answerSix = parseInt(prompt('One plus one is: '));
//   }
//   if (guessCount === allowedAttempts) {
//     alert(`Too many guesses, the answer is ${numAnswer}`);
//     break;
//   }
// }

confirm('Okay, time for a multipe choice question! Please answer with either A, B, C or D');
//Question Seven
var answerSeven = prompt('Which of the following are sea-dwelling dinosaurs? A) Argentinosaurus, B) Ammonite, C) Megalodon, D) Answers B and C');
var upperSeven = answerSeven.toUpperCase();
//console.log(upperSeven);
var sevenAnswerArray = ['B', 'C', 'D'];
var mGuessCount = 0;
var mAllowedAttempts = 6;

function questionSeven(anythingSeven){
  while (mGuessCount < mAllowedAttempts) {
    //console.log(answerSeven);
    //console.log(upperSeven);
    if (anythingSeven !== sevenAnswerArray[0] && anythingSeven !== sevenAnswerArray[1] && anythingSeven !== sevenAnswerArray[2]) {
      alert('Sorry that was incorrect. Try again!');
      anythingSeven = prompt('Which of the following are sea-dwelling dinosaurs? A) Argentinosaurus, B) Ammonite, C) Megalodon, D) Answers B and C').toUpperCase();
      mGuessCount++;
      console.log(`Current Count ${mGuessCount}`);
    }
    else {
      console.log(`${upperSeven} is correct!`);
      var correctSeven = alert('That is correct! the answers are B) Ammonite, C) Megalodon, D) Answers B and C');
      totalScore++;
      return correctSeven;
      // break;
    }
    if (mGuessCount === mAllowedAttempts) {
      var tooMany = alert(`Too many guesses. The answers were ${sevenAnswerArray[0]}, ${sevenAnswerArray[1]}, ${sevenAnswerArray[2]}.`);
      return tooMany;
      // break;
    }
  }
}
questionSeven(upperSeven);

// old loop logic
// while (mGuessCount < mAllowedAttempts) {
//   //console.log(answerSeven);
//   //console.log(upperSeven);
//   if (upperSeven !== sevenAnswerArray[0] && upperSeven !== sevenAnswerArray[1] && upperSeven !== sevenAnswerArray[2]) {
//     alert('Sorry that was incorrect. Try again!');
//     answerSeven = prompt('Which of the following are sea-dwelling dinosaurs? A) Argentinosaurus, B) Ammonite, C) Megalodon, D) All of the above!');
//     upperSeven = answerSeven.toUpperCase();
//     mGuessCount++;
//     console.log(`Current Count ${mGuessCount}`);
//   }
//   else {
//     console.log(`${upperSeven} is correct!`);
//     alert('That is correct! the answers are B) Ammonite, C) Megalodon, D) All of the above!');
//     totalScore++;
//     break;
//   }
//   if (mGuessCount === mAllowedAttempts) {
//     alert(`Too many guesses. The answers were ${sevenAnswerArray[0]}, ${sevenAnswerArray[1]}, ${sevenAnswerArray[2]}.`);
//     break;
//   }

// }



//different way to do the while loop and it works!
// var answeredCorrectly = false;
// while(mAllowedAttempts > 0 && !answeredCorrectly){
//   mAllowedAttempts--;
//   for(var i = 0; i < sevenAnswerArray.length; i++){
//     //console.log(sevenAnswerArray[i]);
//     if(upperSeven === sevenAnswerArray[i]){
//       alert(`${userName}, great job that is the correct answer!`);
//       totalScore++;
//       answeredCorrectly = true;
//     }
//   }
//   if(mAllowedAttempts > 0 && !answeredCorrectly){
//     answerSeven = prompt('Sorry, guess again!');
//     upperSeven = answerSeven.toUpperCase();
//   }
// }

// if (mAllowedAttempts === 0 && !answeredCorrectly) {
//   alert('Thanks for playing, out of guesses here are the correct answers.')
// }

//Final Message to User
alert(`Okay, ${userName} the results are in! You answered ${lowerOne}, ${lowerTwo}, ${lowerThree}, ${lowerFour}, ${lowerFive}, ${answerSix} and ${upperSeven}. Thanks for answering all questions! Your total score was ${totalScore} our 7. If you got any wrong and would like to retry, simply refresh the page.`);
