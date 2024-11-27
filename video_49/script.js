
let a = prompt("Enter user number 1 or 2")


let x = function(e){
    console.log(e)// prints the property of bt1
    console.log(e.target)
    console.log(e.type,e.clientX, e.clientY)
    // e.type ---> tells the type of evrnt
    // .clientX , e.clientY ----> will tells coordinates of mous click on event 
                                //  like check console by clicking butoonb again and again ai diff position


    alert("hello world for user 1")
}

let y= function(){
    alert("Hello World for user 2!!")
}

bt1.addEventListener('click',x)

bt1.addEventListener('click',y)


if(a=="2"){
    bt1.removeEventListener('click',x)
    // similary you can add event too..
}

if(a=="1"){
    bt1.removeEventListener('click',y)
}