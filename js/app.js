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

var yesNo = confirm('Hi ' + userName + '! You have just entered the guessing game! Please answer all questions with either yes/no or with y/n. If you\'re feeling crazy try a random //word and see what happens! Now let\'s begin.');
console.log(yesNo);

//First Question
var answerOne = prompt('Is the sky blue?');
var lowerOne = answerOne.toLowerCase();
console.log(lowerOne);
//Yes answer
if (lowerOne === 'yes' || lowerOne === 'y') {
  //console.log('It was true');
  alert('Correct!');
   totalScore++
   console.log(`current score ${totalScore++}`)
} 
else if (lowerOne === 'no' || lowerOne === 'n') {
  //console.log('It was false');
  alert('False!');
} 
else {
  //console.log('Not a good answer');
  alert('Not a yes or no answer!');
}

//Second Question
var answerTwo = prompt('A goldfish only has a memory of three seconds.');
var lowerTwo = answerTwo.toLowerCase();
console.log(lowerTwo);
//No answer
if (lowerTwo === 'yes' || lowerTwo === 'y') {
  //console.log('It was true');
  alert('False!');
}
else if (lowerTwo === 'no' || lowerTwo === 'n') {
  //console.log('It was false');
  alert('Correct!');
  totalScore++
} 
else {
  //console.log('Not a good answer');
  alert('Not a yes or no answer!');
}

//Third Question
var answerThree = prompt('Is flying in an aeroplane safer than driving in a car?');
var lowerThree = answerThree.toLowerCase();
console.log(lowerThree);
//Yes answer
if (lowerThree === 'yes' || lowerThree === 'y') {
  //console.log('It was true');
  alert('Correct!')
  totalScore++
} 
else if (lowerThree === 'no' || lowerThree === 'n') {
  //console.log('It was false');
  alert('False!');
} 
else {
  //console.log('Not a good answer');
  alert('Not a yes or no answer!');
}

//Fourth Question
var answerFour = prompt('Can a cat jump 6 times it\s length?');
var lowerFour = answerFour.toLowerCase();
console.log(lowerFour);
//Yes Answer
if (lowerFour === 'yes' || lowerFour === 'y') {
  //console.log('It was true');
  alert('Correct!')
  totalScore++
} 
else if (lowerFour === 'no' || lowerFour === 'n') {
  //console.log('It was false');
  alert('False!');
} 
else {
  //console.log('Not a good answer');
  alert('Not a yes or no answer!');
}

//Fifth Question
var answerFive = prompt('Does an octopus has five hearts?');
var lowerFive = answerFive.toLowerCase();
console.log(lowerFive);
//No Answer
if (lowerFive === 'yes' || lowerFive === 'y') {
  //console.log('It was false');
  alert('False!')
}
else if (lowerFive === 'no' || lowerFive === 'n') {
  //console.log('It was false');
  alert('Correct!');
  totalScore++
} 
else {
  //console.log('Not a good answer');
  alert('Not a yes or no answer!');
}

var numTime = confirm('Let\'s switch it up! The next question is looking for a number instead of a yes/no or y/n answer.')
console.log(`${numTime}`);

// Sixth Question
var answerSix = parseInt(prompt('One plus one is: '));
//console.log(typeof answerSix)
console.log(`Answer six is ${answerSix}`)
var guessCount = 0;

while (guessCount < 6) {
  console.log(`Answer six2 is ${answerSix}`)
  //console.log(`Current ${guessCount}`)
  var numAnswer = 2
    if (answerSix === numAnswer) {
      alert('You got it!');
      totalScore++
      console.log(`Score is ${totalScore}.`)
      break;
    }
    else if (answerSix > numAnswer) {
      alert('Too high!');
      guessCount++
      console.log(`Current ${guessCount}`)
      answerSix = parseInt(prompt('One plus one is: '));
    }
    else if (answerSix < numAnswer) {
      alert('Too low!');
      guessCount++
      console.log(`Current ${guessCount}`)
      answerSix = parseInt(prompt('One plus one is: '));
    }
    if (guessCount === 5) {
      alert(`Too many guesses, the answer is ${numAnswer}`);
      break; 
    }
}

confirm('Okay, time for a multipe choice question! Please answer with either A, B, C or D')
//Question Seven
var answerSeven = prompt('Which of the following are sea-dwelling dinosaurs? A) Argentinosaurus, B) Ammonite, C) Megalodon, D) All of the above!');
var upperSeven = answerSeven.toUpperCase();
console.log(upperSeven)
var sevenAnswerArray = ['B', 'C', 'D'];
var mGuessCount = 0

while (mGuessCount < 7) {
  console.log(answerSeven);
  console.log(upperSeven);
  if (upperSeven !== sevenAnswerArray[0] && upperSeven !== sevenAnswerArray[1] && upperSeven !== sevenAnswerArray[2]) {
    alert(`Sorry that was incorrect. Try again!`)
    answerSeven = prompt('Which of the following are sea-dwelling dinosaurs? A) Argentinosaurus, B) Ammonite, C) Megalodon, D) All of the above!')
    upperSeven = answerSeven.toUpperCase();
    mGuessCount++
    console.log(`Current Count ${mGuessCount}`)
  }
  else {
    console.log(`${upperSeven} is correct!`);
    alert(`That is correct! the answers are B) Ammonite, C) Megalodon, D) All of the above! `);
    totalScore++
    break;
  }
  if (mGuessCount === 6) {
    alert(`Too many guesses. The answers were ${sevenAnswerArray[0]}, ${sevenAnswerArray[1]}, ${sevenAnswerArray[2]}.`);
    break;
  }

}

//Final Message to User
alert(`Okay, ${userName} the results are in! You answered ${lowerOne}, ${lowerTwo}, ${lowerThree},${lowerFour}, ${lowerFive}, ${answerSix} and ${upperSeven}. Thanks for answering all questions! Your total score was ${totalScore} our 7. If you got any wrong and would like to retry, simply refresh the page."`);
