/*
This javascript file will contain some practise code for creating 
a number guessing game. 
*/

// add vairbales in order to store data. 

let randomNumber = Math.floor(Math.random() * 100) +1; 
// variable random number assigned a rounded down version of the random number generator. 

const guesses = document.querySelector('.guesses'); 
// a query selector is used for grabbing html elements with CSS class names assigned 
// dom query done to assign const guesses 

const lastResult = document.querySelector('.lastResult'); 
// last result returned by user will be stored into this variable.

const lowOrHi = document.querySelector('.lowOrHi'); 
// low result or high result stored into this variable

const guessSubmit = document.querySelector('.guessSubmit'); 
// this variable is being assigned to the button that will submit the guess

const guessField = document.querySelector('.guessField'); 
// this variable is being assigned to the button that will submit the number from 1-100

let guessCount = 1; 
// setting the guess count to 1 for initalization 
let resetButton ;
// variable resetButton to create button for user to reset the game. 

/*

Practise function check below 

function checkGuess(){
  alert("HELLO THIS IS PLACEHOLDER")
};
checkGuess(); 

*/

// the function below will be used to process the input of the user. 

function checkGuess() {
  const userGuess = Number(guessField.value); 
  /* 

  local variable inside function to get user input called userGuess

  Number method is passed the guessField and then dot notation 
  accesses value. 
  */
  if (guessCount === 1){
    guesses.textContent= 'Previous guesses'; 
  }
  guesses.textContent += `${userGuess}`; 
  // if there is no guess equaled to 1 user guess is passed as a parameter 
  // to the guesses variable 

  if (userGuess ===randomNumber){ 
  lastResult.textContent = 'The guess is correct!'  
}
// this statement returns a string that is a result of userGuess 







}
  
