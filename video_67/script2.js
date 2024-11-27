const creat = async (obj)=>{

let option = {
    method : "POST",  
    header:{   
        "Content-Type" : "application/json"
    },
    body : JSON.stringify(obj)
}

let p = await fetch('https://jsonplaceholder.typicode.com/posts',option) 
// fetch() is asynchronous, meaning it doesn't block the execution of the code while it is waiting for
//  the server's response. Instead, it returns a promise immediately, and the promise will resolve once the server responds
// When we write let p = await fetch(...), we are telling JavaScript to:
// Pause the execution of the function until fetch() is done fetching the data from the server.
   let responce = await p.json() //.json() is still trying to parse the response body. 
//    await tells JavaScript to pause execution of the function until the promise returned by .json() is resolved.
   return responce 
//    The purpose of return response; is to send the parsed JSON data back from the creat() function to the calling function (mainFunk() in your case).
}

 const mainFunk = async()=>{
    let obj ={ 
        title : 'Shivanshu',
        body : 19,
        userId : 1,
            }
    let call =  await creat(obj)
// The await keyword before the creat(obj) function means that JavaScript will wait for the 
// creat(obj) function to complete before continuing to the next line of code inside mainFunk().
    console.log(call)
 }

 mainFunk()
