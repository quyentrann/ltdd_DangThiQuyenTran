// //const urlBacon = "https://baconipsum.com/api/?type=all-meat";
//     
// const urlBacon = "https://jsonplaceholder.typicode.com/todos/1";    
// (function() { $.ajax({       method: "GET",       url: urlBacon,       dataType: "json"     })      .done(function(data) {         console.log(data);       })      .fail(function() {         alert("no good");       });     })()

// $.ajax({       url: "https://jsonplaceholder.typicode.com/todos/1",       beforeSend: function(xhr) {         xhr.overrideMimeType("text/plain; charset=x-user-defined");       }     })      .done(function(data) {         if (console && console.log) {           console.log("Sample of data:", data.slice(0, 100));         }       });

//Get all users
    
// Get a user
    
var url = "http://localhost:8080/api/v1/users";    
var xhr = new XMLHttpRequest()     xhr.open('GET', url + '/1', true)     xhr.onload = function() {       var users = JSON.parse(xhr.responseText);       if (xhr.readyState == 4 && xhr.status == "200") {         console.table(users);       } else {         console.error(users);       }     }    
xhr.send(null);