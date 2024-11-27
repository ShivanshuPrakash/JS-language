console.log(document.body.childNodes)
console.log(document.body.firstChild)
a = document.body.firstChild
console.log(a.parentNode)
// he parent node of the specified element, which could be any type of node 
// (element, text node, comment, etc.).
console.log(a.parentElement)
// If the parent is not an element (for example, a text node), parentElement
//  will return null.
console.log(a.firstChild)  // 1st child ka 1 st child
console.log(a.firstChild.nextSibling)  // 1st child ka brother ya sister that is siblinhg 