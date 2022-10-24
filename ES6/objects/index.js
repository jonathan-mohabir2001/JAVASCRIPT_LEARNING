/*
This JS file will contain practise code for writing within ES6
Destructuring objects, and arrays. 
*/
const burger = {
  cheese:"American", 
  meat: "Beef", 
  bread:"Brioche", 
  toppings:["lettuce", "tomato", "mustard"]
}
const {meat, bread} = burger
console.log(meat, bread)
// meat and bread are grabbed from the burger object. 
// a function will be created below to grab values from a created object. 
const makePresident = ({firstName, lastName}) => {
  // arrow function. 
  // firstName is a parameter which is wrapped within curly braces
  console.log(`The president of the USA is:${firstName} his last name is ${lastName}`)
  // template strings grabs the firstname prop with a message
}
const newPerson = {
  firstName :"Jonathan ", 
  lastName : "Mohabir"
}
makePresident(newPerson); 
// this function grabs the newPerson object and uses the first name,
