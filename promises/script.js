/*
This js file will cover the basics of promises within javascript. 
*/
/*
// below is basic syntax for promises.

// a promise object is delcared first
let thisPromise = new Promise(function (resolve, reject) {
  // using the new keyword a promise  object is delcared.
  // the function is passed two parameters, resolve and reject.
  resolve();
  // this represents a success
  reject();
  // this represents a failure.
});
// the stements within the body of the promise... is what's known as producing code. 
// this is producing a result of success or failure. 

thisPromise.then(
  function(value){console.log('success')}, 
  function (error){console.log('failure')}
)
SYNTAX OF PROMISE COVERED ABOVE, MOVE DOWN TO EXAMPLE. 
*/

function displayResult(result) {
  document.getElementById('demo-section').innerHTML = result;
}
// dom quiere written above.
let x = 23;
// variable x represents value. 
let myPromise = new Promise(function (myResolve, myReject) {
  // a promise object is created and the producing code is below. 
  if (x === 23) {
    myResolve('result is OK');
    // this if statement sets what the success value will be.
    // as long as x is stricly equal to 23 to response will be success. 
  } else {
    myReject('result is rejected');
  }
}, x);
// a promise object created with the two parameters representing the states of this object

myPromise.then(
  function (value) {
    displayResult(value);
  },
  function (error) {
    displayResult(error);
  }
);
