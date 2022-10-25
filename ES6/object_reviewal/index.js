/*
Objects and arrays: 
Destructuring objects and using arrow functions 
to render those objects to a browser.
Express will be used to create an express. 
*/
const express = require('express'); 
const app = express(); 
const PORT = process.env.PORT || 8000; 
const makeDeveloper = ({firstName, lastName}) => {
  return(` <h1>${firstName}-${lastName} is a full-stack egineer </h1>`)
}
// function with parameters wrapped into curly braces. 
const newPerson = {
  firstName:"Jonathan",
  lastName: "Mohabir"
}
// object created with two properties and assigned values. 

app.get('/developer', (req, res) => {
  res.send(makeDeveloper(newPerson))
  // response sends the makeDeveloper function 
  // the object is passed as a parameter to the function 
  // newPerson is then assigend the function of makeDeveloper. 
})
// route to send the developer function. 
const stack = {
  language :"JavaScript", 
  database: "MongoDB", 
  framework: "React.JS", 
  backend:"Express, Node"  
}
// object created with multiple values assigned as strings. 
const{language,database,framework,backend} = stack
// props wrapped within curly braces assigned to  stack. 
app.get('/language', (req, res) => {
  res.send(`<h1> Programming language is ${language}</h1>`)
})
app.get('/database', (req, res) => {
res.send(`<h1>Database server is written using ${database}</h1`)
})
app.get('/framework', (req, res) => {
  res.send(`<h1>Framework is ${framework}`)
})
app.get('/backend', (req, res) => {
  res.send(`<h1>Backend is written using ${backend}</h1>`)
})
// following routes above to create routes to different props from the stack object

app.get('/', (req,res) => {
  res.send('<h1>User has landed onto home page </h1>')
})
app.listen(PORT, () => {
  console.log(`Server has started on port-${PORT}`)
})
// Listen statement set to listen into port. 