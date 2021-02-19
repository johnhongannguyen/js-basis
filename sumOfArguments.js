// create a function sum()
// takes a varying number of args
// returns their sum
// sum(1,2,3,4) => 10 
// challenge yourself to accept an array and still return the same 
// need to detect if the arg is passed is in array 
// using Array.isArray()

// const numbers = [1,2,3,4]

function sum (...items) {
    // adding for an array 
    if(items.length === 1 && Array.isArray(items[0]))
    // reset items to new array
    items = [...items[0]];
        


    return items.reduce((a,b) => a + b);
}

console.log(sum([1,2,3,4]));