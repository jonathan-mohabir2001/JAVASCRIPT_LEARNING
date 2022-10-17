// this js file will cover practise with different functions within es6

// declaring a function regulary. 
function sayHello(){
    console.log("Hello");
}
// regular function to log hello. 
sayHello(); 
// calling the function 
// function declaration

const greeting = function(){
  console.log('Hi there!')
}
greeting(); 
// creating a function which is assigned to a variable named greeting.
// function expression 

// function with arguments created below.
const logCompliment  = function (name, greeting){
  console.log(`Hello there ${name} ${greeting}`)
}
//function with arguments that can have values assigned to them because of the template literals. 

logCompliment('John', 'How are you?');
// hello there is logged out to console, and then template strings are used to add the name and greeting. 

// default parameter functions created below. 

const logRandomThing = function(name = "Jonathan M" , age = 21){
console.log(`Hello ${name} you are ${age} years old`)
}
// function with default parameters above. 
logRandomThing();

// arrow functions created below.
// first a regular function is created.

const lordify = function(firstName){
  console.log(` Greetings${firstName} of Canterbury`)
}
lordify('Jonathan');
lordify('John');
// regular function above.
// arrow function below.

const newLordify = 
(firstName, land) => `Hi there ${firstName} of the ${land}`;


console.log(newLordify('Jonathan', 'Canterbury'));



