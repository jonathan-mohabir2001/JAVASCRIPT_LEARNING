/*
This javascript file will review basic 
concept of "Promises" through the use 
of a fetch function. 

A promise is an "object" which can 
return the state of the object. 

A promise will allow for methods to process 
the success or failure of an operation. 

The fetch (), will be visited in this example 
*/

const fetchPromise = fetch(
  'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
);
console.log(fetchPromise);
/*
The fetch function returns 3 object looking things in the 
console. 
Which indicate the prototype: promise 
promise state "state of the fetch"
Promise Result "the response type "
*/
console.log('started request at: ');
// handler function "then"

fetchPromise.then((response) => {
  console.log(`Received a response: ${response.status}`);
});
