
//  Creating a Promise
let promise = new Promise(function(resolve, reject){
    alert("Open console")
    resolve(56)
})

console.log("Hello One ")
setTimeout(function(){
    console.log("Hello 2 in 2 sec")
},2000)

console.log("My name is Shivanshu")
console.log(promise)