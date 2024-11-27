

// error handling 
setTimeout(() => {
    console.log("Hacking wifi.... Please wait")
}, 1000);
// let suppose you made a error here but you dont want your script to pause so for that 
// you use try and catch that will print error in console and does not pause the execution of script 


// error handling 
try{
    console.log(gadha-prasad)
}
catch(crush){  // crush variable that automatically captures the error object thrown inside the try block.
    console.log("balle balle :" + crush +" NOOB")
}
// ---> try catch work syncronously [poin-1]
// ---> it has exception in scheduled code like settimeout , then in those try catch wont catch it [point-2]

setTimeout(() => {
    console.log("Fetching all details...")
}, 2000);


setTimeout(() => {
    console.log("Breaking all firewalls")
}, 3000);

setTimeout(() => {
    console.log("Retriving passworrd and information")
}, 4000);

setTimeout(() => {
    console.log("Transering data .... ")
}, 5000);


// explaning point [point-2]
try{
    setTimeout(() => {
        console.log(kalu)
    }, 1000);
}
catch(lalu){
    console.log(lalu ,": AND :" ,kalu)


    //  note above syntax is invalid but if try catch is in settimeout functionthen it works
}