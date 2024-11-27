// some more array operations

let num = [43,76,98,65,18,3,21,34,1,3,4,14]
console.log(num)
console.log(num.length)
delete num[3]
console.log(num)
console.log(num.length)


// sort 
num .sort()
console.log(num)  // sorting alphabetically 
//[ 1, 14, 18, 21, 3, 3, 34, 4, 43, 76, 98, <1 empty item> ]

// we can sort an array in what way we wnat buy giving a function to it
let compare = (a,b)=>{
    return a-b
}
num.sort(compare)
console.log("Sorting in asscending order") 
console.log(num)  

// reverse 
num.reverse()
console.log("Reversing array ") 
console.log(num) 

// Splice and Slice


// Splice  has 4 arguments ( starting index ,number of elemnts you want to delete  , elements )
num.splice(2,3,1001,1002,1003,1004,1005)
console.log(num) 


// slice 
// slice out a piece of array . It creats a new array 
let NEWnum=num.slice(5)  // do not mofifies array 
console.log(NEWnum)  // delete all elements from 5 to end 
let NNEWnum  = num.slice(3,8) //[3,8)
"NOTE LAST ELEMENT IS NOT INCLUDED"
console.log(NNEWnum) // delete all elements from 3 to 8

