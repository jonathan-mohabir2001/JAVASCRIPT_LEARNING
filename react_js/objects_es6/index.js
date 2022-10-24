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

