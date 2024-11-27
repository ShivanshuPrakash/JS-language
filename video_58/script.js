let p1 =new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Value 1")

    },1000)
})

let p2 =new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Value 2")

    },2000)

})

let p3 =new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Value 3")

    },3000)

})

let p4 =new Promise((resolve, reject)=>{
    setTimeout(()=>{
        
        reject(new Error("An unknown erro occured"))

    },4000)

})
// all p1 , p2 , p3 run parallely 


// ----------> this code will print value 1 in 1 sec and then 2 in 2se and 3 in 3 sec 
// what if we want all 3 values simultaneously then we use array of promise means promise.all
// utility - in network calls we need all outputs simultaneously 

// p1.then((value)=>{
//     console.log(value)
// })

// p2.then((value)=>{
//     console.log(value)
// })

// p3.then((value)=>{
//     console.log(value)
// })


// this code will reun after 3 sec as 1st all promise will resolve then after this will implemnt 
// and print all values simultaneously  if any fails it becomes the error
let promise_all = Promise.all([p1,p2,p3,])
promise_all.then((value)=>{
    console.log(value)
})


// this will through error as p4--> rejected 
let promise_All = Promise.all([p1,p2,p3,p4])
promise_All.then((value)=>{
    console.log(value)
}) // so in this case we use 


// yha pr we says ak reject hogai koi na baki 3 ka result de do
let promise_rej = Promise.allSettled([p1,p2,p3,p4])
promise_rej.then((value)=>{
    console.log(value) // here we see status of all promises
})

// the one will print 1st that loads early
let promise_race = Promise.race([p1,p2,p3])
promise_race.then((value)=>{
    console.log(value)
})

// retursn 1st promiste that fullfills
let promise_any = Promise.any([p1,p2,p3,p4])
promise_any.then((value)=>{
    console.log(value)
})

// Creates a promise that resolves immediately with a given value.
let promise_res = Promise.resolve(25)
promise_res.then((value)=>{
    console.log(value)
})

//  Creates a promise that rejects immediately with a given error.
let promise_reject = Promise.reject(new Error("Noob"))
promise_reject.then((value)=>{
    console.log(value)
})