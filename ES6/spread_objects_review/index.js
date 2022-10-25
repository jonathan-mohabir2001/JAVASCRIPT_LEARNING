const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
// server code started.
// some objects to be created and then decunstructed. 
const person = ({firstName, lastName}) => {
  return(` <h3>Hello there ${firstName}- ${lastName} </h3>`)  
}
// object created with parameters wrapped into curly braces. 
const thisGuy = {
  firstName:"Jonathan", 
  lastName:"Mohabir"
}
// this guy object created. 

app.get('/viewman', (req, res) => {
  res.send(`<h1>This dude is: ${person(thisGuy)}`)
})
// route created to send the person Function given the thisGuy as a parameter. 


// spread operator practise below 

const newArray = ["Item 1", "Item 2"]; 
const secondArray = ["firstItem", "secondItem"]; 
// two arrays created with some random string values
const someItemsHere = [...newArray, ...secondArray]
app.get('/spread', (req, res) => {
  res.send(someItemsHere.join(", "))
});
// route created to send the value of the  joined value of the variable using the spread operator. 

const someObject = {
  firstProp : "name", 
  secondProp:"value"
}
const anotherObject = {
  numberOne : "valueee", 
  secondOne: "nammeeeee"
}
const joinedObject = {
  ...someObject, 
  anotherObject
}
app.get('/viewobject', (req, res) => {
  res.send(joinedObject); 
})
// route created to send the joined object. 
app.get('/', (req, res) => {
  res.send('<h1>Welcome to home user!</h1>')
})
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})
// listener and home route created. 