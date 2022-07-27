/*
This javascript file is strictly for revision for material learned during the last few weeks of July 2022 
*/
alert('This is a revision file'); 
// simple alert function 

/*
var differentNumbers = new Array(0,1,2,3,); 

var writeFirstNumber = document.getElementById('number-1'); 
writeFirstNumber.innerText(differentNumbers[0]); 
var writeSecondNumber = document.getElementById('number-2'); 
var writeThirdNumber = document.getElementById('number-3'); 
var writeFourthNumber = document.getElementById('number-4'); 
*/
// these functions aren't working for me to write it out to the document. 

var jonathanObject =  {

  myName:'Jonathan',
  myBirthYear: 2001, 
  yearNow: 2022, 
  checkAge:function () {
    return this.yearNow - this.myBirthYear; 
  }, 
};

console.log(checkAge ()); 






