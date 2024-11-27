// Promise channing 

// Defining p1 [Promise]
let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Resolved after 2 seconds ")
        resolve(56)
    }, 2000)
})

// channing by .then()


// NOTE: If You Don't Use resolve in the Initial Promise (p1)
       // These won't execute because p1 is still pending
p1.then((value)=>{
    console.log(value)
    let p2 = new Promise((resolve, reject)=>{
           setTimeout(()=>{resolve("Promise 2")},2000)
    })
    return p2   //when you return something inside a .then() callback, it effectively behaves like you're resolving a new promise with that value
           // NOTE 2:  If there is No return statement or no resolve() something  here then,
                        // rest will Logs: undefined

}).then((value)=>{
    console.log("we are done")
    console.log(value)
    return 2
}).then((value)=>{
    console.log(value)
    console.log("Now pakka wala done")
})



// Quick Quize question 
console.log("Quick Quize")

const loadScript =(src)=>{
    //NOTE: if you omit both resolve and reject, the promise cannot change state and remains pending forever

    return new Promise((resolve, reject) =>{   //The names you choose (e.g., resolve, reject, res, rej, etc.) are linked to the
                                        //  built-in resolve and reject functions of the promise.
        let script = document.createElement("script")
        script.type = "text/javascript"  //Specifies that the script is JavaScript.
        //If you omit the type attribute, the browser will still interpret the script as JavaScript by default:
        script.src = src
        document.body.appendChild(script)
        script.onload=()=>{
            resolve(1)
        }
        script.onerror = ()=>{
            reject(0)
        }
    })
}


let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
a.then((value) =>{
console.log(value)

})
a.catch((error)=>{
console.log(error)
console.log("Script got some error")
})
