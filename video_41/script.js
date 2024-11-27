// difference between console.log and console.dir
console.log(document.getElementsByTagName("span"))  // shows element of DOM tree
console.dir(document.getElementsByTagName("span")[0])  // shows the element as an object with its properties 


// TAG name VS NODE name 
console.log(document.body.firstChild.nodeName)

console.log(document.body.firstElementChild.nodeName)


// printing inner html 

console.log(id1.innerHTML)

// you can set or get inner html
id1.innerHTML = "<i> <b>Hey this side Shivanshu </b> </i>"
 

// extract text 
console.log(document.body.textContent)


// see hidden element 
// secret.hidden = false    if i uncomment this part we can see hidden element 