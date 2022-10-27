/*
General Practise - OCT -26 - 2022
*/
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
// express moudle imported, app set to express methods. Port number set.

const fs = require('fs');
// filesystem imported.
const path = require('path');
// path system imported.
/*
fs.mkdir((path.join(__dirname, '/public')) , {} , function(err) {
  if (err) throw err 
  console.log("A new directory was created!")
})
*/

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/home.html'));
});
// this route is for the home page.
// the sendFile method of response is sent.
// this allows us to render an html page, the path must start from __dirname
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/contact.html'));
});
// route for home page.
// sending contact.html
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/about.html'));
});
// route for the about me page.
// sending about.html

// ES6 concepts below.

const makeFullStack = ({ firstName, lastName }) => {
  return `Your boy ${firstName}-${lastName} is a  god damn full stack developer`;
};
// function created with two props wrapped within curly braces
const thisGuy = {
  firstName: 'Jonathan',
  lastName: 'Mohabir',
};
// object created with properties of first name and last name.
app.get('/viewdev', (req, res) => {
  res.send(makeFullStack(thisGuy));
});
// route to send the makeFullStack function with thisGuy passed as property.

// spread operator reviewed below.
const newArray = ['Value1', 'Value2', 'Value3'];
const secondArray = ['FirstValue', 'secondValue', 'thirdValue'];
const combinedArray = [...newArray, ...secondArray];

app.get('/viewvalues', (req, res) => {
  res.send(combinedArray.join(',...'));
});
// route to send values of combines arrays.

app.listen(PORT, () => {
  console.log(
    `Server has started. Running on port-${PORT}, press ctrl c to end. `
  );
});
// listen statement coded.
