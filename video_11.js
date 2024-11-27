// Functions 


// syntax 
// function declaration 
function average ( x ,  y ){
    return (x+y)/2
}

function average_ans_roundoff ( x ,  y ){
    return Math.round ((x+y)/2)
}
// Arrow function 
const sum = (p, q) =>{
    return p + q
}


let a = 7
let b = 18
let c = 45
console.log("The average of a and b is : ", average(a,b))

// function calling
console.log("The average of b and c is : ", average(b,c))
console.log("The average of b and c is : ", average_ans_roundoff(b,c))


// Calling arrow function 
console.log("The value of sum of a and b is : ", sum(a+b))

// note : no need that a function need parameter