console.log(document.cookie)
// kinda key value player :
document.cookie  = "name_1 = Shivanshu"
document.cookie  = "name_2 = Ashish"
// Setting document.cookie does not overwrite all cookies—it adds or updates the specific key-value pair.
let key = prompt("Enter your key")
let value = prompt("Enter your value ")

document.cookie = `${key} = ${value}` // this will not include special character
console.log(document.cookie)
// Problem: Cookies have restrictions on certain characters, such as = and ;.
let key_2 = prompt("Enter your key_2")
let value_2 = prompt("Enter your value_2 ")
document.cookie = `${encodeURIComponent(key_2)} = ${encodeURIComponent(value_2)}` // decodeURIComponent --> to decode special char in cooki if present 
console.log(document.cookie)

