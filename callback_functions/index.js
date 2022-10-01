/*
In this Javascript file I will be reviewing call back functions. 

What are they: 
Function passed as an argument into another function, which is then 
executed in the outside function. 

This file is initated as  a node file as well. 
*/

function sayHello(name) {
  console.log( `Hi there my name is ${name}`)
}


name = 'Jonathan m '

function getInput(callback){

  callback(name);
}

getInput(sayHello); 

