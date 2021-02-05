const numbers = [1,2,3,4];

// numbers.push() - add something 
// numbers.unshift()-  add beginning at the array 
// numbers.splice() - add somewhere at the middle of the array

// end 
// remove last element of the array and return it 
const last = numbers.pop();
console.log(numbers);
console.log(last);

// beginning 
const first = numbers.shift();
console.log(first);

// middle
const middle = numbers.splice(2,1);
console.log(middle)