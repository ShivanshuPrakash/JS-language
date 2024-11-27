// Error handling 

// for all error im js there are 2 main properties 
// name 
// message 
// --------> Additionally stack 

try{
    console.log(shivanshu)
} catch(err){                      
   console.log(err.name)          // Outputs: ReferenceError
    console.log(err.message)      //  Outputs: "shivanshu is not defined"
   console.log(err.stack)
}
// err.stack (optional): The stack trace that shows where the error occurred.


// Example of Error handling 

try{
    let age =prompt("Enter your age")
    age = Number.parseInt(age)
    if(age>100){
        throw new ReferenceError("This is probably not true")
        // throw keyword: It explicitly throws an error.
        // new keyword : new creates a new error object (e.g., new ReferenceError())
    // -----> Execution:
    }//You are creating a new error object using the ReferenceError constructor.
    //This object can take a message ("This is probably not true") to describe the error.
}catch(error){
    console.log(error.message)
    console.log(error.name)
    console.log(error.stack)

}
console.log("The script is closed ")