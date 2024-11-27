
// The weather function is declared as async, which allows you to use the await keyword inside it.
async function weather() {
    // An async function always returns a promise, which resolves to the value returned by the function.
    // creating a promise
    let delhiWeather  = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("27 Degree")
        }, 1000);  //delhiWeather: Resolves after 1 second with "27 Degree".
    })   


    // creating a promise
    let bangloreWeather  = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("34 Degree")
        }, 5000);  // bangloreWeather: Resolves after 5 seconds with "34 Degree".
    })

    // delhiWeather.then((x)=>{
    //      alert(x)
    // })
    // -----> ABOVE LINE CAN ALSO BE WRRITRN AS

    // Chained .then 
    //  delhiWeather.then(alert)

    //  Chained .then
    //  bangloreWeather.then(alert)

     console.log("Fetching Delhi weather please wait ...")
          let delhiW = await delhiWeather
//The await keyword pauses the execution of the weather function until the promise resolves
     console.log("Fetched  Delhi weather :" + delhiW)
     console.log("Fetching banglore weather please wait ...")
          let bangloreW = await bangloreWeather
     console.log("Fetched banglore weather :"+ bangloreW)
//The function returns an array [delhiW, bangaloreW], which contains the resolved values of both promises.
     return[delhiW , bangloreW]
}

const shourya =(()=>{
    console.log("Hey i am shourya and i am not wating ")
})

console.log("Welcome to weather control room")
let a =weather()
console.log(a)
let b = shourya()  // this parallelly executes does not wait for weather function to run completly 
// if we wnat that shourya will run only when weather function finishes then we have to put all this in async function 
a.then((value)=>{
    console.log(value)
})


// const main =async()=>{
// let a = await weather()   ---> 1st this execute
// let b = await shourya()   ---> run only when weather execution completes 
// console.log(b)
// a.then((value)=>{
//     console.log(value)
// })
// }
// main()