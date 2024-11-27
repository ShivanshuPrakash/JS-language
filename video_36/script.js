// Printing all class names in the console to do further manipulations 

// Select all elements in the document
const allElements = document.querySelectorAll('*');

// Loop through each element and log its class name with the element
allElements.forEach(element => {
    if (element.classList.length > 0) {
        console.log(`Element Name :`, element, `Classes / Class Name : ${element.className}`);
    }
});


// Searching the DOM 

console.log("Searching the DOM ....................")
// change the card tittle to X_card 

let ctitle =  document.getElementsByClassName("card-title")
console.log(ctitle[0])
ctitle[0].style.color = "red"

let ctitle_id = document.getElementById("2nd-card")
console.log(ctitle_id)
ctitle_id.style.color="blue"


// selecting elements my css selector 

let a = document.querySelectorAll(".card-title") // . is used in case of class and # is used in case of id
console.log(a)
a[2].style.color="orange"

let b = document.querySelectorAll("#read-more")
console.log(b)
b[0].style.color = "red" // the thing is why i put here [0]\
// because it give me Nodelist and i can put red to all so i need to give a index in which i want formatting 


// querySelector will return only 1st element so we dont need to provide index 
let f = document.querySelector("#read")
console.log(f)
f.style.color="blue"

console.log(document.getElementsByTagName("h3"))
console.log(document.querySelector(".link").getElementsByTagName("button"))


console.log(document.getElementsByName("description"))

