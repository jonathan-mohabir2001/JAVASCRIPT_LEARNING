/*
This javascript file will contain basic functions and my understanding of them. 
*/
function sayGoodDay() {
  document.write('Good day!');
}
sayGoodDay();

/*
Above is a simple function that is: 
1. first Declared using the function keyword. 
2. assigned a name 
3. Written inside curly brackets is it's actual code as to what it is going to do. 
4. function is then called with it's name and then brackets followed after. 
*/

// second function below
function alertWarning() {
  alert('this is a warning !');
}
alertWarning();
// another simple function above.

/*
Below, I will be looking into another form of functions which will contain information. 
*/

function findArea(width, height) {
  return width * height;
}
 console.log(findArea(4, 5));

/*
The function above created a function to determine the area of something. 

the two parameters are passed 

within the code block, they are then being returned with an operation to multiply off of each other. 

at line 32, I am logging to the console the area value. Also, width and height must be given values, so they are given 
and the result is produced to the console. 
*/
