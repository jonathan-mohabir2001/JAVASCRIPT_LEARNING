/*
This file will be a simple refresher folder for repitition practise
Below will be all that is known with my JS knowledge to this point.
*/

// creating simple variables. 

var myName; 
var myAge; 

// variables declared 
myName = 'Jonathan Mohabir'; 
myAge = 20; 
// variables now assigned values 

// creating simple arrays 

var newArray = [0,1,2,3]; 
console.log(newArray[1]);
// array accessed. 

// creating constructor notation array. 
var myArray = new Array (
  'Jonathan', 
  'Sabrina',
); 
console.log(myArray[1]); 

// arrays are succesfully understood and written out to the console
// after being accessed. 

// moving into creating objects and then accessing them through 
// the console, dom, and alerting 

// literal notation objects below. 

var myObject = {
  myName : 'Jonathan Mohabir', 
  // property 
  ageOfJon: 20,
  //property  
  birthPlace: 'Toronto',
  //property 
  moneyMake: 1600,
  //property 
  taxes: 0.25 , 
  // property
  taxTakeAway:  function () {
    return this.moneyMake * this.taxes; 
  }
  // methods
}; 

var mySecondObject = new Object(); 
mySecondObject.myNewName = 'Jonathan 2 '; 
mySecondObject.myNewAge = 21; 
mySecondObject.myNewJob = 'Front end dev'; 
// second object created using constructor notation cd 