const arr1 = ['JAN' , 'FEB', 'MAR' , 'APR', 'MAY'];
let arr2;
(function(){
    // arr2 = arr1;
    arr2 =[...arr1]; // ... this is called spread operator 
    arr1[0]='potato'

})();
console.log(arr2);