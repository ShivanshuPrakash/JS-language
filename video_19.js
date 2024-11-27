// Using loops in array
let num = [3,34,56,76,32,23]

// Implementing for each loop 

num.forEach((element) => {
    console.log(element*element);
})

// Inside the arrow function, you're taking each element from the num array and computing element * element,
//  i.e., the square of the element.


// NOTE: Array.from used to creat an array from any other object 



// Array.from("Harry")

let item ={
    age : 18,
    dob : 25

}
let a= Array.from(item)
console.log(a)
// The Array.from() method is generally used to create a new array from an array-like or iterable object.
// However, standard JavaScript objects (like item) are not iterable, which means they do not have a default iterator
// and can't be directly converted into an array.
"there fore result will be empty array "

let nm = "Shivanshu Prakash"
let n  =  Array.from(nm)
console.log(n)

// for of loop 
for(let i of num){
    console.log(i)
}
// The for...of loop is designed to iterate over iterable objects like arrays, strings, Maps, Sets, etc.

"we use for of loop when"
"we r just interested in the elements themselves, rather than their indices or keys."


// for in loop 
for(let i in num ){
    console.log(i)  //----> will print keys for array we use console.log(num[i])
}
`
How It Differs from for...in:
for...of gives you the values of an iterable (like the elements of an array).
for...in, on the other hand, gives you the keys (or indices) of an object or array.

`
