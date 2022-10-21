const { setUncaughtExceptionCaptureCallback } = require("process");

/*
This JS file will cover functional programming. 
JS functional programming 
are first class citzens, meaning they can do things 
like what variables do 
Below are some examples of functional programming. 
*/
var log = function(message){
  console.log(message); 
}; 
// variable named log. 
// assigned to a function with parameter of message. 
log("Hello there, functional JS here")
// Using an arrow function to log some results. 
const greeting = newMessage => {
  console.log(newMessage)
}; 
// a constant named greeting is created,
// the Arrow function takes newMessage as it's parameter 
// the arrow is then written, and within the body there is a console.log
greeting("Hello, functional Arrow function here ")
// these functions can actually be written into JS objects too

const javascriptObject = {
  coding: "I am Javascript, i am so cool", 
// Property coding assigned value of a string. 
  describe(coding) {
    console.log(`Here is a message from my property ${this.coding}`)
  }
  // describe method within this object. 
}

javascriptObject.describe(); 

// more pratise below. 
var newGreeting = function (hello) {
  console.log(hello)
}
newGreeting("Hi there, parameter given value. ")
// normal variable assigned to function with hello parameter. 
// newGreeting is then assigned a message in brackets. 

const greetWorld  = hiThere => {
  console.log(hiThere);
}
// greetWorld given hiThere parameter. 
// inside the body of greetWorld, console logs, the hi there parameter. 
greetWorld("Message from greet world."); 

const personObject = {
  saySomething:"Hello, this is a person.", 

  speaking(saySomething){
    console.log(saySomething)
  }
}
personObject.speaking(personObject.saySomething)

// in Javascript functions can also be sent to other functions like arguments.

const insideFn = logger => {
  logger = "Some message from this insideFn function"
}; 
insideFn(message => {console.log(message)})