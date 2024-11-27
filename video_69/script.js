// local storage & realted methods 
// Local Storage in JavaScript is a web storage API that allows developers to store data in a user's browser persistently.
//  Unlike cookies, the data stored in Local Storage does not expire and is available even after the browser is closed and reopened


// Key Features
// 1). Stores data as key-value pairs.
// 2). Capacity of approximately 5-10 MB per domain (varies by browser).
// 3). Synchronous API (operations block the main thread).

let key = prompt("Enter Key you want to set")
let value = prompt("Enter value you want to set for key ")

localStorage.setItem(key, value)
// Stores data in Local Storage. Both key and value must be strings.
//  If a non-string value is provided, it should be converted (e.g., using JSON.stringify() for objects).

// getItem(color)  // ----> get value by key


if(key == "black" || key == "red"){
    localStorage.removeItem(key)
}


if (key == 0 ){
    localStorage.clear()

}


console.log( `the number of key- value stored are : ${localStorage.length}`)