/*
This Javascript File will focus on the Document Object Model

Understanding the DOM, is to understand how to work with the DOM TREE. 

*/

// TO WORK WITH NODES AND THEIR ELEMENTS, DOM QUERIRES NEED TO BE MADE

document.getElementById('one');
document.getElementById('two');
document.getElementById('three');
document.getElementById('four');

// THESE DOM QUERIES ONLY CATCH THESE IDs ONLY ONCE

// DOM QUERIES WILL BE ASSIGNED TO VARIABLES TO WORK WITH THAT ELEMENT MORE THAN ONCE

var mainPage = document.getElementById('page');

// this is the end of simple DOM Querires.

/*
REFRESHER CODE BELOW: 
AUG-28-2022 Practise 
*/

// more dom single element dom queries below, some methods will be practised.
var mainList = document.getElementById('main-list'); 
console.log(mainList.children); 

/*
mainList is a variable which was assigned a DOM querie in order to be worked with 
more than once. 

mainList ID is representing the unorderd list within the HTML page. 

The children property of the object main list is then printing the HTML 
elements which are associated with the unordered list to the console. 
*/