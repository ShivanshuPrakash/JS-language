// so here we make a arrow function of data type const and name changeBgColor
//  in which we use DOM to set the bg color of 1st Element child of body to red

const changeBgColor = () => {
    document.body.firstElementChild.style.background = "red";
};
// The const keyword ensures that the reference to the function is constant, meaning you cannot reassign the function to a different value or function later. 


let BgColor = (color) => {
    document.body.firstElementChild.style.background = color;
};

let b = document.body
console.log("Firstt child of b is ", b.firstChild)
console.log("Firstt ELEMENT  of b is ", b.firstElementChild)

changeBgColor()

let a = confirm("Do you want to change color")
if(a){
    
    let c = prompt("Enter color of your choice")
    BgColor(c)
   confirm("Are u sure to keep this color")
    
}
