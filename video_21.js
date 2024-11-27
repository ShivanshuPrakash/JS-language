// Practise set ch: 5

// Ques 1:
// Creat a array of numbers and take input from user to add number
// to this


let arr = [1,2,3,4,5,6,20,490,560,30,3290]
// let a =  prompt("Enter a number ")
// a= Number.parseInt(a)     --> this is because promp take input in form of string
// arr.pop(a)
console.log(arr)


//Ques 2:
// Keep adding numbers to the array in ques 1 until 0 is added 
// to the array

let a;
// do{
// let arr = [1,2,3,4,5,6]
//  a =  prompt("Enter a number ")
// a= Number.parseInt(a)     --> this is because promp take input in form of string
// arr.pop(a)
// }while(a!=0)
console.log(arr)


// Ques 3:
// Filter number div by 10 from a given array

let b = arr.filter((element) =>{
    return (element%10 == 0)
})
console.log(b)



// Ques 4:
// Creat a array of square of given numbers

let c = arr.map((element) =>{
    return element*element
})
console.log(c)

// Ques 5:
// Use reduce to calculate factorial of a given numbers from an array
// of first n natural numbers (n being the number factorial needs to be calculated)

// finding fac of 7
let arr2 = [1,2,3,4,5,6,7,]
let n = arr2.reduce((x1,x2) => {
 return x*x
})



