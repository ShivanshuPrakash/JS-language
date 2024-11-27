// Conditional statements


// prompt is like asking question and alert is like telling some thing [ analogy bro ]
let a = prompt("Hey whats your age ?")  // by default is take sinput as string 
//  typecasting 
a = Number.parseInt(a) // Converting the strigt to a number 
if(a>0){  // conditional  statement 
    alert("This is a valid age ")
}
else if (a<18 && a>11){
    alert("Welcome teen ")
}
else {
    alert("Go and fuck yourself ")
}


// use of terniary operator 
// condition ? exp1 : exp2   [synatx]
 consol.log("You can ", (a>18 ? "Drive" : "NotDrive"))
