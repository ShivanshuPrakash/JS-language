// Practise Set 4

// QUESTION 1:
// what javas script print 


// console.log("Shiva\"" . length )
` Answer will be : 6`
console.log("Shiva\"" . length)

// extra 
console.log("Shiva\" " . length) // here  answer will be 7


// QUESTION 2:
// explore the includes , starts with and ends with FINCTIONS of a string


// include use : 


const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';
console.log(sentence.includes(word))  // returns true or false 
// as in sentance word is use that is FOX is used so it woll return true 
console.log(
  `The word "${word}" ${
    sentence.includes(word) ? 'is' : 'is not'
  } in the sentence`,
);
// Expected output: "The word "fox" is in the sentence"


// Starts with use:

const str0 = 'Saturday night plans';

console.log(str0.startsWith('Sat'));
// Expected output: true

console.log(str0.startsWith('Sat', 3));
// Expected output: false


// Ends with use :


const str1 = 'Cats are the best!';

console.log(str1.endsWith('best!'));
// Expected output: true

console.log(str1.endsWith('best', 17));
// Expected output: true

const str2 = 'Is this a question?';

console.log(str2.endsWith('question'));
// Expected output: false


// QUESTION 3 : 

// convert the string in lower case

let string = "Shivanshu Prakash"
console.log(string.toLowerCase())


// QUESTION 4:
// extract the 'amount' from the string 

let sen =  "Please give 400 rupees for the freshers party "
// Method 1
console.log(sen.slice(12,15))
// Method 2
let amountStartIndex = "Please give ".length;
let amountEndIndex = sen.indexOf(" rupees");
let amount = sen.slice(amountStartIndex, amountEndIndex);
console.log(amount);

// part 2
 let str =  "Please give dollars 1000 "
 let amt = str.slice("Please give dollars ".length)
 console.log(amt)


 //QUESTION 5:
 // are strings are mutable
 "NO strings are not mutable they are immutable "