// falsy and truthy are not a boolean
// const isActive = true;
// if we pass a name here, name is string, it's not a boolean
// so the JS engine tries to interpreter this as truthy or falsy
// so when the string has a value - JS engine would say truthy 
// in contrast, it says as a falsy
// const name = 'John' // truthy - not falsy 
// if(isActive) console.log('Hello')

// list of falsy values in JS
// undefined
// null
// ' ' (empty string)
// false
// 0
// NaN
let array = [2,3,' ', 3,4,5];
console.log(countTruthy(array));

function countTruthy(array){
 let count = 0 ;
 for(let value of array)
     if(value)
     count++ ;
     return count 

 

 }