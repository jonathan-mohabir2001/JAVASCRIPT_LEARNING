/*
This javascript file will move into focusing on the second aspect of built in objects. 

Real world objects in paticular. 

*/

// Below will be practise of the date object. 

var today = new Date();
var fullYear = new Date(); 
var currentHour = new Date(); 
var currentMillisecond = new Date(); 
var currentMinute = new Date(); 
var currentMonth = new Date(); 
var currentSecond = new Date(); 
var currentTime = new Date(); 
var offset = new Date(); 
var humanReadable = new Date(); 

/*
 In order to use the date object, instances of it need to be created. 

 Above, they are all coded in a constructor notation format. First with the variable name to represent what 
 it will be doing for a type of date. Ex: today's date, the full year etc. 

 And then, the new keyword is utilized and then the Date() is called to signify that the variable assigned is a date 
 type. 

*/


var writeTodayDate = document.getElementById('today-date'); 
writeTodayDate.innerHTML = (today.getDate ()); 

var writeFullYear = document.getElementById('full-year'); 
writeFullYear.innerText = (fullYear.getFullYear()); 

var writeCurrentHour = document.getElementById('current-hour'); 
writeCurrentHour.innerText = (currentHour.getHours()); 

var writeCurrentMillisecond = document.getElementById('current-millisecond');
writeCurrentMillisecond.innerText = (currentMillisecond.getMilliseconds());

var writeCurrentMiniute = document.getElementById('current-minute'); 
writeCurrentMiniute.innerText (currentMinute.getMinutes()); 

var writeCurrentMonth = document.getElementById('current-month'); 
writeCurrentMonth.innerText = (currentMonth.getMonth()); 

var writeCurrentSecond = document.getElementById('current-second'); 
writeCurrentSecond.innerText = (currentSecond.getSeconds()); 

var writeCurrentTime = document.getElementById('current-time'); 
writeCurrentTime.innerText = (currentTime.getTime()); 

var writeOffset = document.getElementById('timezone-offset');
writeOffset.innerText = (offset.getTimezoneOffset()); 

var writeHumanReadable = document.getElementById('human-readable-string'); 
writeHumanReadable.innerText = (humanReadable.toDateString()); 
