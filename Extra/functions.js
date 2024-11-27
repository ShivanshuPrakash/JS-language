// functions
function shivanshu(){ // function declaration
    console.log("chosen one"); // function prototype
    }
 shivanshu(); // finction call

//  passing arguments in function 
function Name(a,b){
    var full_name= a+b;
    // console.log(full_name);
    return full_name;
}
var first_name= "shivanshu";
var last_name = "prakshu";
console.log(Name(first_name,last_name));
//   Global scope and Function
var global =7;
function fun1(){
    oopsGlobal = 5; // no var keyword makes it global variable automaticaly
}
 function fun2(){
    var output;
    if (typeof global!='undefined'){
        output+="global: " + global ;
    }
 
 if( typeof oopsGlobal!= "undefined"){
    output+= "oopsGlobal: " + oopsGlobal;
 }
 console.log(output);
}
fun1();
fun2();
function sum( num1 , num2 ){
    var sum = num1+num2;
    return sum;
}
var answer = sum(5,4);
console.log(answer);
console.log(sum(4,3));
// JSON.STRING
let array = [1, 2, 3, "four"];
let jsonString = JSON.stringify(array);
console.log(jsonString); // Output: "[1,2,3,\"four\"]"

// stand in line
function legend(arr, num){
    arr.push(num);
    return arr.shift()
}
var arr = [1,2,3,4,5];
console.log("Before: "+ JSON.stringify(arr));
console.log(legend(arr,7));
console.log("After" +JSON.stringify(arr) );


// returning booleans value from a function 
function bool(a , b) {
    if(a>b){
        return true
    }
    else if (a<b){
        return false
    }
    
}
console.log(bool(9,8));

// returning early pattern from function
function pattern(a,b){
    if(a < 0 || b < 0){
        return undefined;
    }
   return  Math.round(Math.pow(Math.sqrt(a)+ Math.sqrt(b),2));
    // Math.sqrt(a) computes the square root of a.
    // Math.sqrt(b) computes the square root of b.
    // Math.sqrt(a) + Math.sqrt(b) adds the square roots.
    // Math.pow(x, 2) computes x squared. Here, x is Math.sqrt(a) + Math.sqrt(b), so it squares the sum of the square roots.
    // Math.round(y) rounds y to the nearest integer. Here, y is the squared sum from the previous step.
}
console.log(pattern(4,9));
console.log(pattern(-4,5));  //undefined 
/*
Math.sqrt(4) is 2.
Math.sqrt(9) is 3.
The sum is 2 + 3 = 5.
Squaring this sum gives 5^2 = 25.
Finally, Math.round(25) is 25, so the output is 25.
*/

// Use arrow function to write concise anonymous functions

const magic = () => new Date();

// write arrow function with parameters 
 var myconcat = (arr1,arr2) => arr1.concat(arr2);
 ;
 console.log(myconcat([1,2],[3,4,5])); 

 