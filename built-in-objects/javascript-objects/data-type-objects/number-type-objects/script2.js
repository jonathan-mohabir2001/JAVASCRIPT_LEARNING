/*
This javascript file will contain working with the Number object to further demonstrate 
properties or methods of the Global javascript object (number)
*/


var originalNumber; 

originalNumber = 10.23340; 

var displayOriginal = document.getElementById('original-number'); 
displayOriginal.innerText = (originalNumber); 

var roundToPlace = document.getElementById('number-rounded');
roundToPlace.innerText=(originalNumber.toFixed(2)); 

// The line above rounds the original number to two decimal places. 
