let elem = document.childNodes[document.childNodes.length-1]
elem.style.background = "lightblue";
// let elem = document.childNodes[document.childNodes.length - 1]: 
// This line assigns the last child node of the document to elem, which is usually the <html> element
//  itself.


// Prints all the child nodes present in the document 
let all =document.body.childNodes
console.log(document.body.childNodes)


// accessing 1st child in the document 
console.log(document.body.firstChild)
// or another method to select 1st  element 
console.log(document.body.childNodes[0])
// formating in 1st child node
document.body.firstChild.style.background="red"

// accessing last child in the document 
let b = document.body.lastChild
// or another method to select last element 
let element= document.body.childNodes[document.body.childNodes.length-1]  
console.log(b)  // actually script tag 
console.log(element)

// cant do formatting 
b.style.background="yellow"

// Checking weather it has a child node or not 

let c = document.querySelector("h1").hasChildNodes()
console.log(c)  // return true as text node i.e hext is present in it 

console.log(document.querySelector("h4").hasChildNodes())
// will return false 

//Converting DOM as array to implement methods of array in it 
let arr =  Array.from(document.body.childNodes)
console.log(arr)


// extra masti with coding 
let masti =  all[3]
all[3].style.background="yellow"