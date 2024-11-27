// Arrays 
let arr = [13,45,65,68,true,null,"Shiva"]
console.log(arr)

// Array methods
console.log(`The lenght of array is ${arr.length}`)


// arrays are mutrable 
console.log(arr[4])
arr[4] = false
console.log(arr[4])
console.log(arr)

// printing a array by for loop
for(let i =0 ; i<arr.length; i++){
    console.log(arr[i])
}