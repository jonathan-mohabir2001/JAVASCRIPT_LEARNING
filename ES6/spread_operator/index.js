/*
This JS file will focus on using the spread operator. 
*/

// new arrays created below. 

const mountains = ["Everest","Mount fuji", "Himalays"]
// array of mountains created
const canyons = ["Grand Canyon", "Palo Dura"]
// array of canyons created 
const together = [...mountains, ...canyons]
// spread operator here. 
// three dots before name of array, comma, and same thing with other array
console.log(together.join(", ")); 
// calling the join method called for the two sets of array strings to join


// these spread operators can also be used within objects 

const myBreakFast = {
  item1 :"Eggs", 
  item2: "Bread", 
  item3:"Bacon"
}
const myDinner = {
  first:"Rice", 
  second:"Chicken"
}
const aDaysMeal = {
  ...myBreakFast, 
  myDinner
}
console.log(aDaysMeal); 
