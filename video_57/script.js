// Adding multipler handlers to a single Promise 

let p1 = new Promise ((resolve , reject)=>{
    console.log("Hey I am resolved")
    setTimeout(()=>{
       resolve(1)
    },2000)
})
// handler-1
p1.then(()=>{
    console.log("Congratulation this is now resolved #Handler 1 worked")
})

// parallel execution of both handlers   ----> they all run independently 

// handler-2
p1.then(()=>{
    console.log("Hurray i am Handler 2")
})

// handler-3
p1.then(()=>{
    console.log(" #Handler 3 worked")
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // console.log("i am settimeoutr in handler 3 i will run in 1 sec")
            resolve(4)        // why not return 4 as it is same as resolve(4)
        },1000)
    }).then((value)=>{console.log(value)})
})