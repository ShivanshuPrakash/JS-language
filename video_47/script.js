document.write(`JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well. JavaScript supports object-oriented programming with object prototypes and classes. It also supports functional programming since functions are first-class objects that can be easily created via expressions and passed around like any other object.

This page serves as a quick overview of various JavaScript language features, written for readers with background in other languages, such as C or Java.`)
// settime out is anonymnous function ---> does not have any function name 
let a = setTimeout(function(){   // function(){ ---> this creat a anonymous function 
    alert(" I am inside of settimeout")
},3000)

console.log(a)  // this will print the timerID in console

// ----------> EXPLANATION 
// // let a = – This assigns the setTimeout function to a variable a, allowing you to reference or cancel it later using clearTimeout(a) if needed.

// setTimeout – This is a JavaScript function that takes two parameters:

// A function to execute.
// A delay in milliseconds (1000 ms = 1 second).
// function() { alert("I am inside of settimeout"); } – This is an anonymous function that contains the code to be executed after the delay. Here, it triggers an alert box with the message "I am inside of settimeout".

// 3000 – This specifies the delay in milliseconds, so 3000 means the function will run after 3 seconds.

let b = prompt("Do you want to close  this time out function ")
if(b=="yes"){
clearTimeout(a)
}
 console.log(a)

// Using setTime out to run a function once after the interval of time 


// declaring function 
const sum = (a,b)=>{
    console.log("i am running..",a+b)
    a+b
}
// using setTimeout to run a function after 4sec 
//syntax ---> srttimeout(function ,   delay ,  arguments1, arguments 2)
setTimeout(sum,4000,3,7)


// SET INTERVAL HAVE SIMILLAR SYNTAX LIKE SETTIMEOUT 
// ---> set interval is like loop that runs after a interval 

setInterval (function(){
    console.log("after interval i will run again ")
}, 5000)

// like we clear settimeout function by settimeout likewise we did for interval by 
// using clearInterval(time)