// ARRAY METHODS

let num = [1,23,4,5,65,99]

// CONVERTING AN ARRAY IN STRING

let b = num.toString()
console.log(b)
console.log(typeof b)


// JOIN METHOD
let c = num.join(" shiva ")
console.log(c)  // joins shiva after ecah element of array 
console.log(typeof c)

//deleting last element in array 

console.log(num)
num.pop() // modifies the real array  
console.log(num)
let r = num.pop() // returns the last element 
console.log(r)



// PUSH
let rr = num.push(18) // adds the element in array
console.log(num,rr) // modifies the array


// SHIFT ARRAY 
let rrr = num.shift()  // removes the 1st element of array 
console.log(num)         // modifies the new array 
console.log(rrr)


// Unshift 
let ushif = num.unshift(2)  // adds the element at the beginning of array 
console.log(num)    // modifies the real array
console.log(ushif)


// concate()
let arr1 =  [ 1,11,111,1111]
let arr2 = [2,22,222,2222]
let arr3 = [3,33,333,3333]
console.log(arr1)
console.log(arr2)
console.log(arr3)

let v = arr1.concat(arr2,arr3)  // used to join array 
console.log("After concat arr1 : ")

console.log(arr1) // does not change the original array 

console.log("After concat arr2 : ")
console.log(arr2)


console.log("After concat arr3 : ")
console.log(arr3)

console.log("Returning v ")

console.log(v)

let f =  arr1.concat(arr3)
console.log(f) // you can concate as number of array ypu want 
