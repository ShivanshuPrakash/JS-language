// while loop
var whileloop = []
 var i = 0;
 while(i<5){
    whileloop.push(i);
    i++;   
 }
 console.log(whileloop);

//   Iterate with for loops

var forloop = [];
for( var i =0 ; i<5 ; i++){
    forloop.push(i);
}
console.log(forloop);

// iterate even numbers with a for loop
var evenNumbers = [];
for(var i= 0 ; i <10 ; i+=2){
    evenNumbers.push(i);
}
console.log(evenNumbers); //for array of odd number increment will be i+=2 but i is initializwd to i=0

//Count Backwards with a for loop
var Backwards = [];
for(var i=10 ; i>0 ; i-=2){
    Backwards.push(i);
}
console.log(Backwards);

//Iterate through an array with a for loop
var ourArr = [9,10,11,12,13];
var ourTotal = 0;
for(var i= 0; i< ourArr.length; i++){

ourTotal += ourArr[i];
// console.log(ourTotal);
}
console.log(ourTotal);

// nesting for loop
function multiplyarr(arr) { 
    var product= 1;
    for( var i=0; i<arr.length;i++)
    {
        for (var j=0 ; j<arr[i].length;j++){
            product *= arr[i][j];
        }
    }
        return product;
}
var product = multiplyarr([[1,3],[3,4],[5,6,7]]);
console.log(product);


// do while loops
var krishna=[];
var i = 10;

do{
    krishna.push(i);
    i++;
    //even though the condition is false but loop will print atleast onece
}while (i<5)
    console.log(i,krishna); 

// when condition is true
var shree_krishna=[];
var j = 10;

do{
    shree_krishna.push(j);
    j++;
    console.log(j,shree_krishna); 
    }while(j<20)
    console.log(j,shree_krishna); 

// coding challange


