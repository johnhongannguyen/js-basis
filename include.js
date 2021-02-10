// create a function named include
// check it if a given element exists in the array
// if yes - return true 
// else return false
// imagine this include() is not in array, so we have to create a function to return it

let numbers = [1,2,3,4]; 

// console.log(numbers.includes(1));
console.log(includes(numbers,0));

function includes(array, searchElement){
    for(let e of array)
        // console.log(e);
        if(searchElement === e) 
         return true;
       return false;  
    

    }