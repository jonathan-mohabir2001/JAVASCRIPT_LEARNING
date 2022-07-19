/*

This Javascript file will focus on Javascript objects. 

Javascript objects focus on two main aspects: data-type objects and real life objects. 


*/


// The lines below will focus on the data-type objects. I will practise using the string object and access it's 
// properties or methods. 
var firstParagraphMessage; 
firstParagraphMessage = 'Hello there world'; 

var secondParagraphMessage; 
secondParagraphMessage = 'This is Jonathan Mohabir'; 
// two string variables are created to be maniupulated. 


var displayFirst = document.getElementById('first-paragraph'); 
displayFirst.innerText = firstParagraphMessage; 

var displaySecond = document.getElementById('second-paragraph'); 
displaySecond.innerText = secondParagraphMessage; 
// two variables created and outputted to designated section within HTML file for display of message. 


var displayFirstManupilated = document.getElementById('uppercase-paragraph'); 
displayFirstManupilated.innerHTML = firstParagraphMessage.toUpperCase();

var displaySecondManipulated = document.getElementById('character-index-paragraph');

displaySecondManipulated.innerText = firstParagraphMessage.indexOf('Hello');

console.log(firstParagraphMessage.indexOf('there'));


