/*
This javascript file covers 
a basic example of asynchronous Javascript 
with the implmentation of a callback. 

function doStep1(init) {
  return init + 1;
}
function doStep2(init) {
  return init + 2;
}
function doStep3(init) {
  return init + 3;
}

function callSteps() {
  let result = 0;
  result = doStep1(result);
  result = doStep2(result);
  result = doStep3(result);
  console.log(`Result is: ${result}`);
}
callSteps();
above was the previous example of synchrnous 
programming below will be asynch. 
*/

function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
}
/* 
like the synchronous function, do step 1 is 
passed init to show a initial value 
of 0. 

and then callback is also passed as a parameter 

callback is then written inside the function again
but with result passed as a parameter. 
*/

function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}

function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
}
// to this point do step functions are the same but different parameters.

function doOperation() {
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log(`result is: ${result3}`);
      });
    });
  });
}

console.log(doOperation()); 
// result outputted is 6. 
