// indexing and nested array
var array1 = ["shivanshu",9];
var first_element = array1[0];
console.log(first_element);
// nested array 
var array2 = [["shivanshu", 9] , ["shourya", 7]];
// indexing for multi dimension array
var element = array2[1][0];
console.log(element);
// modifying array
array2[1][1]="thala for a reason";
console.log(array2);
// adding data in array by PUSH  function
array2.push(["Tarun",5]);
console.log(array2);
// removing data from array by pop 
array2.pop(); // only removes last element
console.log(array2);
// use of shift function
array2.shift(); // removes first element of array 
console.log(array2);
// unshift function 
array2.unshift("shivanshu",2.0); // add an element in begning 
console.log(array2);

//  Mutated an array Declared with const 
const s = [5,7,2];
function editing(){
    "use strict";

    // s=[2,5,7]  // throws error and says read-only
//    "but we can update it by using bracket notation "
  s[0]=2;
  s[1]=5;
  s[2]=7;
}
 editing();
 console.log(s);

 