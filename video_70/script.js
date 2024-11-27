
sessionStorage.setItem("name","Shivanshu")

// here data exists onlyy within the current browser tab another tab with same page will have
//  a different storage 
sessionStorage.removeItem("name")


// storage event
sessionStorage.setItem("name","Shivanshu")

window.onstorage = (e)=>{
alert("change")
}