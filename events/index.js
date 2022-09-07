/*
This JS file will focus on EVENTS 
Aspects of event handling and event listening will be covered. 
*/

// this line will grab the id of the form box to read the characters
function checkCharacterCount(){

  var nameElement = document.getElementById('name'); 

  if(this.value.length < 4){
    nameElement.textContent = 'username must be bigger than this!'
  }

}