// map filter reduce
// map(), filter(), and reduce() are higher-order functions in JavaScript that allow you to work with arrays in a declarative, concise, and functional way

// 1. map():
// The map() method creates a new array by applying a given operations/function  to each element of the original array.
// It transforms each element of the array based on the operation/function you provide.


// 
// Examples of some functions are 
// callback: The function that gets called for each element in the array. The return value of this function is placed in the new array.

// newArray: A new array with transformed values.


let num = [23,43,65,12,43,87]
let a = num.map((value,index) => {
    console.log(value, index);
    return value+1
    // return value+index

})
console.log(a)
// there are some additional arguments for map and for each  
// Eg : value , index etc



// Filter method 

// The filter() method creates a new array with all elements that pass a certain test defined 
// by a given function. It filters the array based on a condition.


// Use case: When you want to create a subset of an array based on some condition.


let num2 = [34,2,56,3,67,9,5,3]
let b = num2.filter((a)=>{
return a<10
})
console.log(b)


// Reduce method 
let num3= [1,2,3,4,5]


let c = num3.reduce((h1,h2)=>{
return h1+h2
})
console.log(c)

// ------> This way is also correct [nothing just passing another aaraw function in reduce]
// const reduce_funk= ((h1,h2)=>{
//     return h1+h2
//     })

// let c = num3.reduce((reduce_funk)=>{
//     return h1+h2
//     })
//     console.log(c)

"NOTE : ANY METHOD DOES NOT CHANGE THE ORIGINAL ARRAY "