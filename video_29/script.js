// take input as age from the user and based on it alert them either he/she can drive or not 

let age = prompt("Enter your age ")
age = Number.parseInt(age)

function canDrive(num){
    if (num>18){
        alert("you can drive")
    }
    else if (num ===18){
        alert("1st make your Learning licemnce")
    }
    else if (num<0){
        alert("refresh page  and then Renter you age ")
    }
    else
        alert("you are under age , you can't drive")
 
}


// use confifm to ask user if he entered correct age or not 
function verify(num){
    confirm(`you enter you age as ${num}. Do you want to proceed!`)
}


// check weather the entered age is correct or not if negative then shoe error 
function cross_verify(num){
    if(num < 0){
        alert("You entered wrong age ")
    }

}
// write a program to change the url like  google.com (Redirection) if user enters a 
// number greater than 40

 function redirect (num){
    if(num>40 && num<50){
    location.href="https://thefauxy.com/"
    }
 }




// change the background of the page based on user input 
function change (num){
let color = prompt("Enter the page background color ")

if (num <50){
    return 0 
}
else 
document.body.style.background= color
}





// solutions 
verify(age)
cross_verify(age)
canDrive(age)
redirect(age)
change(age)
