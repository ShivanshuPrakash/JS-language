// loops
"decicated for (for) loop "

// 1) basic for loop 
// 2) For of loop 
// 3) For in loop 
// 4) while loop
// 5) Do while loop  



// ----------> 1) basic for loop 
// let n = prompt("Enter the value of n")
let sum = 0
// n = Number.parseInt(n)
for(let i = 0 ; i<5 ; i++){
    sum += (i+1)  // sum = sum + (i+1)
}
console.log("Sum of first "+ 5 + "natural number is " + sum )

// Practise of FOR loop 
//  ques: FInd the factorial of 5
let fac = 1;  

for(let i= 1 ; i<=5; i++){
// fac = fac *i
fac *= i 
} 
console.log("The value of factorial of 5 is " , fac )



// ----------> 1) for  in loop 
let obj = {
    shiv :  100,
    shourya :  99,
    aditya : 77,
    yagas : 70
}
for (let a in obj ){
    console.log (a)
    console.log("Marks of "+ a + " are "+ obj[a])
}
// this loop also works with arrays 


// ------------> 2) for of loop 
for (let b of "Shivanshu")   // Traget thing should be iterable 
    console.log(b)