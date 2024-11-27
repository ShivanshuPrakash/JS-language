// Understanding var and let 


// REDECLARATION 

// ------->   let:
let y = 10;
//let y = 20;  // Error: Identifier 'y' has already been declared

// ------------>var:
var x = 10;
var x = 20;  // No error
console.log(x); // 20

// HOSTING 

//-----------> var:
console.log(a); // undefined (hoisted, but not initialized)
var a = 5;

//----------->let:
console.log(b); // ReferenceError: b is not defined
let b = 5;

// SCOPE 
//--------->var:
function testVar() {
    if (true) {
        var x = 10;
    }
    console.log(x); // 10, because var is function-scoped
}
//--------->let:
function testLet() {
    if (true) {
        let y = 10;
    }
    console.log(y); // Error! y is not defined, because let is block-scoped
}
// Const  [ name hi kafi ha i mean self explanatory ]
// const should be initalized during declaration because cant be declared later
