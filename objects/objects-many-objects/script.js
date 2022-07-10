/*
This JS file will focus on: 

creating objects but, creating them as several objects to represent similar things. 
*/

function jonathanObject(name, age, dollarPay){
  this.name = name; 
  this.age = age; 
  this.dollarPay = dollarPay; 
}

/*
Above is a function that contains statements that are used to create simple properties of the Jonathan Object, 

There is 3 properties which describe a name, an age, and a dollarpay per hour at the current age of the jonathan. 

Again, this function that was written to create the jonathan object is only like a blueprint which pre defines the 
properties and methods that an object will have. 

*/

var firstJonathan = new jonathanObject(' Younger Jonathan', 20, 19.00); 

var secondJonathan = new jonathanObject('Older Jonathan' , 21, 45.00); 


/*
Above here now, 

These two lines of code are INSTANCES of the JONATHANOBJECT. 

They are given their object names like usual with a var, 

then using the constructor notation approach the 'new' keyword is used and then the name of the main 
object is made and then within the brackets, the properties of NAME, AGE, DOLLARPAY are then given actual 
values that correspond to their data type. 
*/



console.log(firstJonathan.name); 
console.log(firstJonathan.age); 
console.log(firstJonathan.dollarPay); 

console.log(secondJonathan.name); 
console.log(secondJonathan.age); 
console.log(secondJonathan.dollarPay); 