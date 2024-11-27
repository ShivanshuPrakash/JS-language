id1.className="text-dark yellow"
a = id1.classList
console.log(a)

a.remove("text-dark")
a.add("newlook")   // sililarly remove 
// a.toggle("text-dark")
//  nhi ha to laga dena ha to hata dega ---> toggle 

b = a.contains("red")
console.log(b)

c = a.contains("newlook")
console.log(c)
