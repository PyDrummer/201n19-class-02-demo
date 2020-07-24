'use strict';
//GOALS:
// prompt 5 questions times that accept either yes or no answers
// normalize the user input with .toUpperCase() and .toLowerCase()
// let the user know if they answered correctly with an alert(). Replace the console.log() with alert()

// dont forget to //COMMENT OUT the console.logs before submitting!

// Remember to add commit push to my repo in github
// submit the url of your repo to the assignment

var userName = prompt('Welcome to my guessing game site! Before we start lets get your name:');
console.log(userName);

var yesNo = confirm('Hi ' + userName + '! You have just entered the guessing game! Please answer all questions with either yes/no or with y/n. If you\'re feeling crazy try a random word and see what happens! Now let\'s begin.');
console.log(yesNo);

//First Question
var answerOne = prompt('Is the sky blue?');
var lowerOne = answerOne.toLowerCase();
console.log(lowerOne);
//Yes answer
if (lowerOne === 'yes' || lowerOne === 'y') {
  //console.log('It was true');
  alert('Correct!');
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
} 
else {
  //console.log('Not a good answer');
  alert('Not a yes or no answer!');
}

//Final Message to User
alert("Okay, " + userName + " the results are in! You answered " + lowerOne + ", " + lowerTwo + ", " + lowerThree + ", " + lowerFour + " and " + lowerFive + ". Thanks for answering all questions! If you got any wrong and would like to retry, simply refresh the page.");
