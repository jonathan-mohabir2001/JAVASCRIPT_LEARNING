const express = require('express'); 
const app = express(); 
const PORT = process.env.PORT || 8000; 
const fs = require('fs')
const path = require('path'); 

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/public/home.html"))
})
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, "/public/contact.html"))
})
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, "/public/about.html"))
})
// routes created to render html pages for necessary pages. 



const makeFullStack = ({firstName, lastName}) => {
  return(`<h1>This guy ${firstName} - ${lastName} has become full stack!</h1>`)
}
const thisGuy = {
  firstName:"Jonathan" , 
  lastName:"Mohabir"
}
app.get('/viewdev', (req, res) => {
  res.send(makeFullStack(thisGuy))
}); 
// route to send destructing JAVASCRIPT OBJECT. 

app.listen(PORT, () => {
  console.log(`Server has started ${PORT}`)
})




