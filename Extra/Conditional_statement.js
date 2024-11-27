// if statements
function loops(was_that_true){
    if(was_that_true){
        return "Yes , that was true";
    }
    return "No, that was false "
}
console.log(loops(true));
// comparision with equality operator
function equality(num){
    if(num==7){
        return "Yes, thala for a reason";
    }
    return "No, Mere sath aniya hua ha"
}
console.log(equality(7));
console.log(equality(11));
// COMPARISION WITH THE STRICT EQUALITY OPERATOR
/*
CONCEPT
3==='3'  // this says this is false (high level strictness)
3=='3' //this says this is true let it go (low level strictness)
*/
function strictness_low(num){
    if(num==7){
        return "Yes, thala for a reason";
    }
    return "No, Mere sath aniya hua ha"
}
console.log(strictness_low(7));
console.log(strictness_low('7'));
// here both prints  "yhala for a reason"
function strictness_high(num){
    if(num===7){
        return "Yes, thala for a reason";
    }
    return "No, Mere sath aniya hua ha"
}
console.log(strictness_high(7));
console.log(strictness_high('7')); //it does not print "thala for a reason" because of high strictness

//  SAME CASE WITH INEQUALITY OPERATOR
/*
5!==5  
5!==='5'  //this is true (not equal)
*/
// similiraly you can use different operators like <,> ,<= and >=

//  USE OF AND / OR OPERATOR 
function logical(num){
    if(num>=100 && num <= 999){
        return "The given number is 3-digit";
    }
 return "The  given number is not 3-digit";
}  
console.log(logical(111));

function test_or(num) {
    if(num>=74 || num<= 99)
        return "You got 9 cgpa in this subject";

 return "heartbroke bro but we rise again";
}
 console.log(test_or(88));

// if - else statement 

function if_else(num) {
    if(num >= 90 && num<= 100)
        return "you got 10 cgpa";
    else{
        return "You are still gennius";
    }
}
console.log(if_else(89));
// else- if statement 
function else_if_statement(num){
    if(num >= 90 && num<= 100)
    return "you got 10 cgpa";
    
    else if(num>=74 && num<= 89){
        return "You still got 9 cgpa";
    }
    else{
        return "still you make me proud broo"
    }
    
}
console.log(else_if_statement(75));
//make sure you have correct order of if else statement 

// SWITCH STATEMENTS 
function maths(val){
    var answer;
    switch(val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default :
            answer = "psi";
    }
    return answer;
}
console.log(maths(7));

// 2nd way 
// function mathematics(val){
//     var answer;
//     switch(val){
//         case 1:
//             return  "alpha";
//             break;
//         case 2:
//             return  "beta";
//             break;
//         case 3:
//             return  "gamma";
//             break;
//         case 4:
//             return  "delta";
//             break;
//     }
    
// }
// console.log(mathematics(4));
 
// multiple identical options in switch statement 

function ratings(value){
     var remark;
    switch(value){
        case 1:
        case 2:
        case 3:
            remark= "low";
            break;
        case 4:
        case 5:
        case 6:
            remark = "mid";
            break;
        case 7:
        case 8:
            remark = "Descent";
            break;
        case 9:
        case 10:
            remark = "Excellence";
            break; 
        default:
            remark = "Please enter a valid ratings";
    }
    return remark;
}
console.log(ratings(7));
// some times switch statement provides an edge over else-if ladder



// Use the Conditional (Ternary) Operator 

// condition ? statement if true : statement if false 


function checkEqual (a,b){
    return a===b ? true : false;
    }
    console.log(checkEqual(5,5));
    
    // use of multiple conditional operator
    
     function check(num){

        return num >0 ? "positive" : num < 0 ? "negative" : "zero"

     }
     console.log(check(10));
     console.log(check(0));
     console.log(check(-7)); 

