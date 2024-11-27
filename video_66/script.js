 // fetching API
//--> js used to send network and return info from the network when needed[AJAX]

// AJAX refers to the process :  using AJAX to interact with a server in the background, without refreshing
//  or reloading the web page. Here's a breakdown of what it means:
// What is AJAX?
// AJAX stands for Asynchronous JavaScript and XML, and it's a technique used to create dynamic web pages by communicating
// with a server behind the scenes. Despite its name, it can handle data formats other than XML, 
// such as JSON or plain text.
//  [refer to last of page......... ]

const apiKey = "f88aef724d0a8a5f74e2934905dba7f2"

 // pre-requisites
 const lon = 77.0442228329433
 const lat = 28.633395883692913

 let URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
// fetch api is used to data over the network 
 let a =fetch(URL)          // what does fetch keyword do :

 //The fetch() function in JavaScript is used to make a network request to a specified URL and retrieve data. 
//It returns a Promise that resolves once the response is available.

 // getting a responce is 2 stage process [why 2 stage? explain that 2 stage ]
 a.then((value1)=>{

    // Initial Fetch (Response Object):

    // When the fetch() function is called, it does not directly give you the actual data. 
    // Instead, it gives you a response object (value1 in your code), which contains metadata
    //  like the status code, headers, and methods for accessing the body (e.g., .text(), .json()).
  

console.log(value1.status)   // true if HTTP staus code lies between 200-299
    console.log(value1.ok)


// Responce heders
console.log(value1.headers)  //What is Responce heders ?
// Response headers are part of the HTTP response sent by the server.
                    //    They provide metadata about the response, such as:

// Content-Type: Type of data (e.g., application/json or text/html).
// Content-Length: Size of the response body in bytes.
// Date: Timestamp of when the response was sent.
// Server: Information about the server sending the response.


// Additionaly what is request headers 
// Request headers are sent from the client (browser or application) to the server. 
// They provide information about the request, such as:

// Authorization: Credentials for accessing a protected resource (e.g., an API key).
// Accept: The types of responses the client can handle (e.g., application/json).
// User-Agent: Information about the client making the request (e.g., browser name/version).


    // console.log(value1.text())
               // or             // Any one can run WHY?
    return value1.json()
    // // what is .json()

    // .json() is a method of the response object that:

    // Reads the response body as a string.
    // Parses the string as JSON.[To parse means to examine or think about something carefully in order to understand it]
    // Returns a Promise that resolves to a JavaScript object.
    
    
  

 }).then((value2)=>{

      // Processing the Body:
// To access the actual data (response body), you need to parse it using methods like .json() or .text().
// These methods return another Promise, so you need a second .then() to handle the parsed data (value2 in your code).
   
    console.log(value2)
})
 



// An HTTP response is what a server sends back to the client (e.g., a browser or app) after receiving 
// and processing an HTTP request. It contains the requested information (if successful) and metadata about the response.

// What is Metadata?
// Metadata is "data about data." In HTTP communications (like when you fetch data from an API), metadata is additional 
// information sent along with the request or response to describe the data being sent or received.



// Structure of an HTTP Response
// Status Line:
// Indicates the status of the response.

// Response Headers:
// Provide metadata about the response.
                            // Content-Type: Specifies the format of the response (e.g., JSON, HTML, plain text).
                            // Date: Timestamp when the response was sent.
                            // Server: Information about the server.


//  Response Body:

// Contains the actual data requested by the client (if any).
//     Example:
//       For a weather API, it might return:
//        json
//            Copy code
//         {
//           "temperature": 23,
//           "humidity": 50
//         }


// Why Is Metadata Important?
// Guides Data Handling: Metadata tells clients/servers how to process the data.
// Optimizes Performance: Headers like Cache-Control reduce redundant requests.
// Enhances Security: Authorization headers enforce access control.



// [.............ajax content ]

// How does AJAX work?
// When you use AJAX (via tools like the fetch() API or XMLHttpRequest), you:

// Send Data to a Server:
// The client (e.g., your browser or JavaScript code) sends a request to the server, often containing
// information like user inputs or configurations.

// Retrieve Data from the Server:
// The server processes the request and sends back a response. This data could be anything: weather info, user details,
// search results, etc.

// Update the Web Page Dynamically:
// The returned data can be used to update parts of the web page without reloading the entire page.

// Key Advantages of AJAX
// No Page Reload: Improves user experience by avoiding full-page refreshes.
// Faster Interactions: Only specific parts of the page are updated.
// Real-Time Data: Enables features like live search, auto-refresh, or real-time notifications.
// How Fetch API Fits In
// The fetch() API is a modern JavaScript method that simplifies AJAX. It allows you to:

// Send GET, POST, or other types of HTTP requests.
// Process server responses asynchronously.