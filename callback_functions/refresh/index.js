/*
This javascript file will contain practise of callback functions.
Node file created in order to help run this js file
*/
function sayWord(word) {
  console.log(`Hello there here is a word: ${word}`);
}
// function created to hold a word

function processWord(callback) {
  const firstWord = 'Tango';
  callback(firstWord);
  // call back function passed callback as parameter
  // constant declared within function process word.
}
processWord(sayWord);
// callbacks are passed functions as their parameters, above this is done.

function holdMath(x, y) {
  console.log(`Here is the output for your operation: ${x} + ${y}`);
}

function doMath(callback) {
  const x = 2;
  const y = 2;
  const result = x + y;
  callback(result);
}

doMath(holdMath);
