
/*
This javascript file will contain fundamental practise of working with 
and understanding AJAX. 

AJAX ALLOWS FOR: 
requesting data from a server without having to refresh 
an entire page. 

The best method to go about it is to use a fetch, or an axios call 

Best response for a data type will be to use json format. 

JSONPlaceHolder example will be utlized. 
*/
const listUsers = document.getElementById('authors');
// catching element of html file using DOM querie.

const url = 'https://jsonplaceholder.typicode.com/users';
/*
API to be fetched will be the one above, stored into const called 
URL. URL can now just simply be used within the fetch method. 
*/

fetch (url)
// the simple API request is sent to the url 
.then((response)=> {
/* WHAT IS ".then"
it is a method that is used with the fetch call to process it. 

WHAT IS "response"

response represents the actual data being retrived from the 
URL. This can be further prozcessed into a data format we would 
prefer to use. 
*/
console.log(response);
 return response.json();
 
})

// the response is then turned into JSON format. 


.then((data)=> {
  let authors = data;
  // 
  authors.map(function(author) {
    let li = document.createElement('li'); 
    let name = document.createElement('h2'); 
    let email = document.createElement('span');

    name.innerHTML = `${author.name}`; 
    email.innerHTML = `${author.email}`; 

  }); 
})




