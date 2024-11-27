// Syncronous Programming :

// Synchronous programming is a programming model where tasks are executed one at a time in a sequential order.
// Each task must complete before the next one begins. This approach can lead to delays if a task takes a long time,
// as it blocks the execution of subsequent tasks.

// let a = prompt("What is your name? ")
// let b = prompt("what is your age ")
// let c = prompt("Which is your fav color ")
// console.log(a+" is " +b +" yr old and his fav color is : "+c )


// Asynchronous Programming : 

// Asynchronous programming allows tasks to be executed out of sequence or concurrently, without waiting for previous tasks
// to complete. This is particularly useful for time-consuming operations like file reading, network requests, or database operations.

setTimeout(function(){
    console.log("I am setTime out autamatically appear after 3 sec")
},3000)

console.log("End of program")


//              ---->      Call-back function 

// A callback in JavaScript is a function that is passed as an argument to another function and is executed later,
// either synchronously or asynchronously. Callbacks allow you to handle operations that may not complete immediately,
// such as data fetching, timers, or event handling.


function bootscraptScript(error ,link ){
    if(error){
        console.log(error)
        return
    }
    console.log("You added the bootscrapt script : "+ link)
}


function custom(){
    console.log("You is not adding bootscrapt script you make ypur own script")
}


function loadScript (src,callback){   //The keyword callback itself is not special—it’s just a variable name
                         // The callback parameter gets the reference to the bootscraptScript function.
    var script =  document.createElement("script")
    // The var script is a variable that holds a reference to this newly created <script> element. This allows us to manipulate its properties (like src, integrity, etc.) 
    script.src = src
    // The src attribute of a <script> element specifies the URL of the JavaScript file to be loaded.
    script.onload=function(){
        // The onload event is triggered when the script is fully loaded and executed.
        console.log("Loaded script with SRC: "+src)  //---> checking function working or not 
       
        callback(null , src)   // --> executing call back 
    
    //Handling error
    script.onerror = function(){
        // The script.onerror event triggers if there’s an issue loading the script (e.g., network issue, invalid URL)
        console.log("Error! loding script with src:" + src)
        callback(new Error("Src got some error")) 
        
        // new Error("message"):
          // Error is a built-in JavaScript object that represents an error that occurred during the execution of a program.
    }
    }
    document.body.appendChild(script)
}
loadScript(`https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js`,bootscraptScript)




// Script Fails to Load (Error Scenario Output)

// Error! loading script with src: https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js
// Error: Src got some error
