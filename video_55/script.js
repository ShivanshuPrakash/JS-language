// Promise .then() and .catch()



// creating promise  p1 and p2
let p1  = new Promise((resolve, reject)=>{
    console.log("promise is pending")
    setTimeout(()=>{
       
        console.log("I am promise and i am fullfuill")  // --->  fullfillment can be of 2 type either rejected or resolved
        resolve("p1 promis is resolved by shivanshu")  // calling resolve 
    }, 5000)
})

// Parallel execution of both pomises p1 and p2 
    //Promises are asynchronous by nature. When you create multiple promises, they run independently
    //in the background without waiting for each other. This happens because JavaScript is single-threaded,
    // but it uses a background thread (via the event loop) to handle asynchronous tasks like setTimeout


    // QUESTION : Are resolve and reject just parameter names like a and b in a function?
let p2  = new Promise((resolve, reject)=>{   //Yes, resolve and reject are just parameter names in the executor function:
    console.log("promise is pending")
    setTimeout(()=>{
       
        console.log("I am promise and i am rejected")
         reject(new Error("I am an error"))  // this error syntax is used to throw error even if not present 
    }, 5000)
})

// use of .then  --> to get the value 
p1.then((value)=>{      //The argument passed to value is the value provided to resolve when fulfilling the promise.
    console.log(value)
})


// use of .catch  ---> to catch the error
p2.catch((error)=>{   //The argument passed to error is the value provided to reject when rejecting the promise.
    console.log("some error occured")
    console.log(error)
})

// anonymous case ----> eg: Network calls
p2.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
})


// printing STATE of promises
console.log(p1)

console.log(p2)


