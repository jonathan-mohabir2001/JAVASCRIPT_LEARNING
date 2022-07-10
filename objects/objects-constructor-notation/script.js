/*

This javascript file will focus on: 

the creation of objects in the use of constructor notation. This is the second method to create 
objects within the JS lanaguage. 

*/

var jonathanObject = new Object();

jonathanObject.name = 'Jonathan';
jonathanObject.age = 20;
jonathanObject.birthYear = 2001;
jonathanObject.currentYear = 2022;
jonathanObject.checkAge = function () {
  return this.currentYear - this.birthYear;
};

console.log(jonathanObject.name);
document.write(jonathanObject.checkAge());


var secondaryObject = new Object(); 

secondaryObject.name = 'Secondary object'; 
secondaryObject.value = 2; 
secondaryObject.age = 2000; 
secondaryObject.arithmetic = function(){
  return this.age - this.value; 
}

document.write(secondaryObject.name); 
document.write(secondaryObject.value);
console.log(secondaryObject.arithmetic()); 
4