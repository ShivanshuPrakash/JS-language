// A POST request in web development is used to send data to a server to create or update a resource.
//  It's one of the HTTP methods commonly used in APIs and web forms.


// Key Features of a POST Request:

// Data Submission:--->
        // Sends data (like JSON, form data, files) in the request body to the server.
        // Example: Submitting a login form or creating a new user in a database.


// Secure Data Handling:--->
        // Data isn't visible in the URL (unlike GET requests), making it slightly more secure.

// Non-Idempotent:
        // Multiple identical POST requests can lead to different outcomes (e.g., creating multiple resources).

// Headers:
        // Includes headers like Content-Type to specify the format of the data being sent (e.g., JSON, form-encoded).

// Common Status Codes:
        // 201 Created (for successful resource creation).
        // 400 Bad Request (if the server can't process the request).


//----------------------------------------------> Example of a POST Request:<-----------------------------------------


// fetch('https://example.com/api/resource', {
//     method: 'POST', // Specify POST method
//     headers: {
//       'Content-Type': 'application/json' // Sending JSON data
//     },
//     body: JSON.stringify({ name: 'Shivanshu', age: 19 }) // Request payload
//   })
//     .then(response => response.json()) // Parsing the JSON response from the server
//     .then(data => console.log(data)) // Logging the server's response
//     .catch(error => console.error('Error:', error)); // Handling any errors
  
//-------------------------------------------------------->CODE<------------------------------------------------------------------

// fetch(url, options)  -------> syntax of fetch 
let option = {
    method : "POST",  // method: Defines what type of operation the server should perform (e.g., create, update, fetch, or delete).
    // headers: Provides additional information like data format, authentication, or content type.
    header:{  // JSON (JavaScript Object Notation) 
        "Content-Type" : "application/json"
    },
    body : JSON.stringify({ //ON.stringify(): Converts the JavaScript object { name: 'Shivanshu', age: 19 } into a JSON string because the server expects data in JSON format.
        name : 'Shivanshu',
        age : 19,
        userId : 1,
        // When sending data in a POST request, the HTTP protocol expects the body to be in a text format
        // thats why we use JSON.stringify here
    })
}

fetch('https://jsonplaceholder.typicode.com/todos',option)
.then(response => response.json())   // responce refers to responce object 
// JSON.parse() takes the string and converts it into an actual object so you can access properties like jsonObject.name.
      .then(json => console.log(json))  // json refers to parsed JSON object 
      .catch(error => console.error('Error:', error));
