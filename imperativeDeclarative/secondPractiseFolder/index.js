/*
Additonal practise on declarative programming within Javascript. 
*/
var sayHello = function (greeting) {
  console.log(greeting)
};
/*
variable say hello assigned a function, 
*/
sayHello("Value passed to parameter greeting.")
const sayGreeting = message => {
  console.log(message)
}
// message parameter assigned to sayGreeting function. 
var newObject = { 
  sayHi: "Hello, here is a random text", 
  produceMessage(sayHi){
    console.log(sayHi)
  }
}
newObject.produceMessage()
