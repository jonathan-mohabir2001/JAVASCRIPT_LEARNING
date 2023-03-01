/*
MENTAL MODEL OF PROMISES, ASYNCH, AWAIT. 

critcal js to understand.
*/

// functions within js can be passed around 

function doThis(thisTask){
  console.log('Im running')
  thisTask(); 
  // callback 
}

doThis( () => {
  console.log("TASK A")
})
doThis ( () => {
  console.log("task b")
})