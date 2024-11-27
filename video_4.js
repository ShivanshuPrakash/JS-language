// There are 7 types of primitive data types in java script 
 
// and non primitive data type is called object in java script [ object are noting but key value pairs ]

//  7  primitive data types in js

// N -  Number
// N - Null
// S - Symbol
// S - String 
// B - Boolean
// B - Bigint 
// U - Undefined 

let a = null;  // null matalb kuch nhi ha isma 
let b = 345;
let c = true;
let d = BigInt(18);
let e = "Harry";
let f = Symbol("I am a nice symbol");
let g = undefined;  // iska pata hi nhi isma kuch ha ya nhi abi define nhi ha ye
console.log(a,c,d,e,f,g);
console.log(typeof d);

// Objects in js [non primitive data type]
const items =  {
    // keys :  // value 
    "Name" : "Shivu",
    "class" : "IT",
    "GOAT" : true,
    "Rank" : 1
}
console.log(items["Name"]);