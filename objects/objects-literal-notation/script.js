/*
This js file will be focusesd on the creation of objects. 

Below will be the first one created using literal notation 
*/
var jonathanFrontEndDev = {
  name: 'Jonathan Mohabir',
  age: 21,
  role: 'front-end-developer',
  currentYear: 2022,
  birthYear: 2001,
  checkAge: function () {
    return this.currentYear - this.birthYear;
  },
};

/*
The jonathan object above has been given 4 properties, each of different data types 

There is also one function that will take the birth year and subtract it with age to figure the age of today 
*/

// the log to the console below here prints out the objects property of name.
console.log(jonathanFrontEndDev.name);

console.log(jonathanFrontEndDev['checkAge']());

// this object method.  is accessed using the square brackets.

// below will be a second object created to further engage practise and understanding

var jonathanGirlFriend = {
  firstName: ['A', 'S', 'J'],
  herAge: 19,
  isTaken: false,
  yearToday: 2022,
  yearOfBirth: 2002,
  girlFriendAge: function () {
    return this.yearToday - this.yearOfBirth;
  },
};

document.write(jonathanGirlFriend.firstName[1]);

document.write(jonathanGirlFriend.isTaken);

document.write(jonathanGirlFriend.girlFriendAge());

// this is the end of the review for objects in the use of literal notation.
