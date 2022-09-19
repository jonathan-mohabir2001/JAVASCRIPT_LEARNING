/*

This javascript file contains an example 
to demonstrate the slower beheavior of 
synchronous programming. 

*/

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
/*
Above each function called do step: 

1st do step takes an initial value of 0 
and then adds 1, the result of 1 is saved to init 

2nd adds 2 

3rd adds to 3. The last value of init is 6 


call steps is then created and contains 
an initial 0 value of result, and then result 
is passed each do step function to add up results 

resulting in the last value of 6. 

This is a basic example of synchronous programming.
*/
