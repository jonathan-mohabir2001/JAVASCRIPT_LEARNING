/*
This javascript file will cover a review of callbacks 

Call backs are functions which are passed as arugments 
into other arguments.Below will be code to demonstrate. 

This file is initated as a node file. 

*/

function sayGreeting(message){
  console.log(`Here is a following message: ${message}`)
} 
// this function is passed a parameter to hold a message. 

function processMessage(callback){
  // in the parameter callback is passed in order to call back... the say something constant delcared below 
  const saySomething = "Here is a message!"

  callback(saySomething)
  // callback is passed the variable of saySomething
};
processMessage(sayGreeting);
// the processMessage is passed a parameter of the say greeting function which holds the message variable. 

// below will be another example demonstrating callbacks

function doSomeMath(output){
  console.log(`Here is an output function: ${output}`)
}
// this function will hold one output which will allow for holding operations in the other 
function processOutput (callback){
  const firstOutput = 1+1 
  callback(firstOutput)
  const secondOutput = 2+34
  callback(secondOutput)
}
processOutput(doSomeMath)


function produceWord( word){
  console.log(`Here is a random word: ${word}`)
}
// word function created and passed parameter. 
function processWord(callback){
  const random = "Cat"
  callback(random)
  // random variable assigned a word 
  // callback passed the variable random. 
}
processWord(produceWord)
// callback demonstrated by... calling process word function and then passing the produce word function to it. 