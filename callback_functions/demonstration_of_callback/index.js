// demonstrating callbacks.
// below will be some other functions to demonstrate a sequence control.
// results will be outputted to a index.html file.
/*
To demonstrate some sequence of control with regular functions, 
an adding and subtraction function will be written below. 
*/
function displayAdding(sum) {
  document.getElementById("addition").innerHTML = sum;
}

function displaySubtract(difference) {
  document.getElementById("subtraction").innerHTML = difference;
}
// two functions created and are doing dom queries, to output a result.

function doAdding(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
function doSubtracting(num1, num2) {
  let diff = num1 - num2;
  return diff;
}
// two functions created to add and subtract
let operation1 = doAdding(13, 2);
let operation2 = doSubtracting(10, 5);
// two constants created to hold values outputted from the functions
displayAdding(operation1);
displaySubtract(operation2);
// the problem with these codes is that two functions must be called to display a result.. 
// callbacks will be written below to make this code more efficient
function displayFirstName(value){
  document.getElementById("fname").innerHTML = value
};
function displayLastName(value2){
  document.getElementById("lname").innerHTML = value2
}
// these two functions are doing dom querries to hold the value of first name and last name 
function sayFirstName(name1, callback){
  
  callback(name1)
}; 
function sayLastName(name2,callback){
  callback(name2)
}; 
// two functions created with callback functionality. 
sayFirstName('Jonathan' ,displayFirstName);
sayLastName('mohabir', displayLastName)
// function called and passed other function as parameter, here is the callback demonstration

// the callback has reduced the number of times functions were called. 
