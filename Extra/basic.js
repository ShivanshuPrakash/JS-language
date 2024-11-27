// basics of java / variables / datatypes 
var myname ="shivanshu"
// variables are case sensitive
console.log(myname);
const pi = 3.14;
// above pi is consatnt and value can't be changed
var firstname ="shourya";
var lastname ="gupta"
var fullname = firstname + lastname ;
console.log(fullname);
var chapri = "tarun" + lastname;
console.log(chapri);
// case sensitive language 
var number=56;
console.log(number);
let sum = number + 46;
// similarly with all + , - , / , *
console.log(sum);
number++ // increment or decrement 
console.log(number);
// Augumented maths operator
var num1 = 7;
// num1 = 3 + num1;  insted of this you can also de
num1+=3;
// lets try with srings 
var hehe = "sentance 1"
hehe += "sentance 2";
console.log(hehe);
// more advancement 
var adjective = "paranoid being";
var real = " yes true "
real+= adjective;
console.log(real);
// same with all operators
console.log(num1);
var remainder;
remainder= 11%3;
console.log(remainder);
// dodge double quotes by escape character
var dodge = "today we learn js i.e\"java script\" "
// other ways to dodge 
var dodge = 'today we learn js i.e"java script" '
var dodge = `today we learn js i.e"java script" `
// CODE OUTPUT 
/*
\' single quote
\" double qoute 
\\ backslash
\n new line 
\r carriage return
\t tab 
\b back space 
\f form feed
*/
var mysrt="Firstline\n\t\\SecondLine\n ThirdLine"
console.log(mysrt); 
// finding the length of string 
var length;
var solid_string = 'hehehehehehehe';
length= solid_string.length;
console.log(length);
// Bracket notation to find 1st character in string
var nAme= "Shivay"
var first_char= nAme[0]; //indexing
console.log(first_char);  
// string immutability
var srcpy = "jello world"
srcpy[0]= "H";
console.log(srcpy); // can't change the value to become hello world
//  to change that you need to enter
srcpy = "heloo world"
console.log(srcpy);
// Bracket notation to find last  Character in  unknown string
var unknown = " who is shivanshu ";
var trimmed = unknown.trim();
// This will trim the spaces and correctly give you the last character of the string "shivanshu".
var last_char = trimmed[trimmed.length - 1];
console.log(last_char);  // Output will be "u"







