// String Methods
 let namee =  "Shivanshu Prakash" // space is not regarded in length 
 // length of string 
 console.log(namee.length)
// Upper case
console.log(namee.toUpperCase())   // here upper case is function not method and difference you must know 
// to lower case
console.log(namee.toLowerCase()) // string function not a string method 
// slice 
console.log(namee.slice(2,4)) // [2,4) brackets have there usual meaning 
// Replace
console.log(namee.replace("Shivanshu", "Shourya"))
// concatination 
let pooki =  "Shourya Gupta"
console.log(namee.concat(" is the best friend of ", pooki))
// here in name of shivanshu we are adding a sentance as shown above
let brother = "         Tarun     "
// Triming of unwanted space
console.log(brother)
console.log(brother.trim())

let note = "Remeber strings are immutable"
// pooki[4] = @ // not possible because immutable 
console.log(note.toUpperCase())

//use a for loop to print the string 
for(let i = 0 ; i<= note.length ; i++){
    console.log(note[i])
}
`you can also use + to concate strings `



