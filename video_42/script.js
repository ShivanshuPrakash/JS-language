// i want class of div 
a= id1.getAttribute("class")
console.log(a)

// Check weather it has X attribute or not

console.log(id1.hasAttribute("class"))
console.log(id1.hasAttribute("style"))

// set a attribute

// id1.setAttribute("hidden", "true")  
id1.setAttribute("class", "true  shai-ha")  
console.log(id1.classList)

// NOTE: after setAttribute you lost your previous classes as it replaces all


// remove a attribute 
id1.removeAttribute("class") // this will remove complete class atrribute not just class true
console.log(id1.classList)

// get all attributes for partucular
console.log(id1.attributes)


// CUSTOM ATTRIBUTE 

 console.log(id2.dataset)

 console.log(id2.attributes)



console.log(id2.dataset.game)
console.log(id2.dataset.player)

