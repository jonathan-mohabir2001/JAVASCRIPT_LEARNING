/*
This JS file will focus onto getting familiar with the WINDOW child object of the browser object-model. 

Below, variables are created in order to print properties which will look at: 

*/

console.log(window.innerHeight); 
console.log(window.innerWidth); 
console.log(window.location); 

/*
 Some properties of the window child object are written out to the console. 

 Below will be code to write to the HTML document so the window objects properties can appear onto the page 
*/

var msg = '<p>browser window width is:  </p>' + window.innerWidth; 

msg += '<p> height is: </p>' + window.innerHeight; 
msg += '<p> screen width is: </p>' + window.innerWidth; 
msg += '<p> screen height is: </p>' + window.innerHeight; 

var element = document.getElementById('information'); 

element.innerHTML = msg; 

alert ('Your current page is located here:' + window.location); 

console.log(msg); 
