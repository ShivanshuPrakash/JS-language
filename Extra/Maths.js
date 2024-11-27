// generate random fractions 

function randomFraction(){


   return Math.random();  //maths.random will provide a random number decimal number between 0 and 1
}
console.log(randomFraction());


// generate random whole Numbers

var RandomNumber = Math.floor(Math.random()*20);
// this will make a random whole number between 0 and 19 
function randomWholeNumber(){


    return Math.floor(Math.random()*10);  

}
 console.log(randomWholeNumber());

//  Generate Random Whole Numbers within a Range

function randomrange(min , max){
   return Math.floor(Math.random()*(max - min +1))+min;
}
randomrange(1,9);
console.log(randomrange);


