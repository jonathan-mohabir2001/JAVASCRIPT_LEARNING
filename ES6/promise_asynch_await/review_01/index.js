/*
Creating our own promise object. 
*/

const PENDING = 0 ; 
const FUFILLED = 1; 
const REJECTED = 2; 
// three constants to represent our states 

function CustomPromise(executor){
  // executor is a parameter 
  // that will be doing the work 
  // executor is a function it self. 
  let state = PENDING;
  let value = null; 
  let handers = []; 
  let catches = []; 

  function resolve(result) {
    if (state !== PENDING) return

    state = FUFILLED; 
    value = result; 
  }
  
}