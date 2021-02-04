const numbers = [3,4];

// end
numbers.push(5,6);

// beginning

numbers.unshift(1,2); 
console.log(numbers);
// middle
numbers.splice(2,0, 'a', 'b');