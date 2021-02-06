const numbers = [1,2,3];

// iterate an array by for ... of
for(let number of numbers)
console.log(number);
// iterate an array by using forEach()
// can optionally take a separate parameter 
// in this case, that's index which indicates position of the value of the array
numbers.forEach((number,index) => console.log(number,index));
