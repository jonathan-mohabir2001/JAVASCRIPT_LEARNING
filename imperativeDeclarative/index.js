/*
Practise and understanding of imperative programming and 
declarative programming. 
*/
// to understand declarative, understand imperative. 
// imperative is less automated in a sense... refer to code below. 
// grabbing elements in a imperative way... 
//const paragraph1 = document.getElementById("first-para"); 
//const paragraph2 = document.getElementById("second-para"); 
// grabbing two elements from existing html page 
//const newElement = document.createElement("div"); 
//const newElement2 = document.createElement("h4"); 
// creating two elements for new linked html page. 
const {render} = ReactDOM; 
// JSX/React concepts, render is assigend the functionality of ReactDom

const WelcomeHome = () => {
<div id="app">
  <h1>Hello there world</h1>
</div>
}
// welcomeHome "component" is created. 
render (<WelcomeHome/>); 
// render is now called and then passed the WelcomeHome created component. 