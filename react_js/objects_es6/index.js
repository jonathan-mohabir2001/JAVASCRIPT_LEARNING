const person = (firstName, lastName) => ({
  first: firstName,
  last: lastName,

  // method to return name.
});
// object created but through a Arrow function.

//this arrow function will then hold a javascript obect with two properties of first and last name.
const newPerson = person('jonathan', 'mohabir');
// newPerson object created assigned my name
console.log(newPerson.first, newPerson.last);

// BABEL - middle man which transforms JS source code to what browser can understand. 
// BABEL is capable of taking things like an arrow function and making other code with it. 
// Objects and arrays coded below. 
const meal = {
  apps: "Motza sticks", 
  firstCourse:"Mac n cheese", 
  secondCourse:"Steak and grits", 
  drinks:["red wine", "water", "beer", "bubbly"]
}
// object created with some properties.
const {apps, firstCourse} = meal; 
// variable created to grab first two fields from the object
console.log(apps, firstCourse); 
// object properties are logged out to console. 
// To pull objects properties from an object, desctrucuring values can be done. 
const president = ({firstName}) => {
  // it is imperative to have this property nested into brackets, and then curly braces which contain the prop name./ 
  console.log(`${firstName} is president of USA`)  
}
// president is a function which can take the first name of a regular person 
const electedPresident ={
  firstName:"Jonathan", 
  lastName: "Mohabir"
}
// first name and last name created as properties of the object above
president(electedPresident); 
// the president function is called  and passed the object
// because of that prop firstname passed... president function grabs the firstname prop of the object


