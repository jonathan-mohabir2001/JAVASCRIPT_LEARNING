/*

This JS file will be a simple object creation practise for me to review what was learned on the 
10th of JULY, 2022. 

*/

// first objects will be created using literal notation. 

var firstJonathanObject = {
  age: 20, 
  name :'Younger Jonathan',
  jobDescription : 'GFS driver helper' 
}; 
var secondJonathanObject = {
  age:21, 
  name:'Older Jonathan', 
  newJobDescription:'Jr Front end developer'
}; 

/*
Above are two objects which are given only three properties. They describe my age and future age, Younger me 
and older me, and my current job and my desired job. 

These objects are created through the use of literal notation. 
*/


var jonathanAge = document.getElementById('age-paragraph'); 

jonathanAge.textContent = firstJonathanObject.age; 

var firstJonathanName = document.getElementById('name-paragraph'); 

firstJonathanName.textContent = firstJonathanObject.name; 

var firstJonathanJobDescription = document.getElementById('job-description'); 

firstJonathanJobDescription.textContent = firstJonathanObject.jobDescription; 

var secondJonathanAge = document.getElementById('second-age-paragraph'); 

secondJonathanAge.textContent = secondJonathanObject.age; 

var secondJonathanName = document.getElementById('second-name-paragraph'); 

secondJonathanName.textContent = secondJonathanObject.name; 


var desiredJob = document.getElementById(' second-job-description'); 

desiredJob.textContent = secondJonathanObject.newJobDescription; 



/*
The javascript above is simply getting the elements by their IDs within the HTML. 

Variables are created to represent the properties of the first and second objects in order to write to the DOM. 

After getting their IDs, the values of the objects properties are then written to the IDs of the HTML elements. 
*/