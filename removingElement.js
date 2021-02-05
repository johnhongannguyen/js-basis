let numbers = [1,2,3,4];
let another = numbers;

// numbers.push() - add something 
// numbers.unshift()-  add beginning at the array 
// numbers.splice() - add somewhere at the middle of the array

// end 
// remove last element of the array and return it 
// const last = numbers.pop();
// console.log(numbers);
// console.log(last);

// beginning 
// const first = numbers.shift();
// console.log(first);

// middle
// const middle = numbers.splice(2,1);
// console.log(middle)

/* Remove all the elements in the array */
// recommend solution 1 & 2

// solution 1
// declare numbers array with let
// assign new numbers array by empty array 
// the previous numbers array is still somewhere in the memory 
// but it will be deleted by garbage collector 
numbers = [];

// solution 2
numbers.length = 0 ;

// solution 3
numbers.splice(0, numbers.length);

//solution 4
while(numbers.length > 0)
    numbers.pop();
console.log(another);
console.log(numbers);