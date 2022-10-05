/*
This js file will cover the basics of asynchrnous javascript, and how it works. 
Knowledge of callbacks will be repeated here. 
*/
function displayName(){
  document.getElementById("display-message").innerHTML = "Hello there friend!"
}
setTimeout(displayName,4000);

// the display name function was passed as a callback to the set time out function.


