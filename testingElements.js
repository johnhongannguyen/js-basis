const numbers = [-1,-2,1, 2,3];

// testing positive numbers in the array 
// if all the numbers of the array are positive
// return true - else return false
// it terminates searching once it gets a negative number in the array
// const allPositive = numbers.every(value => {
//     return value >= 0 ;
// })

// we would check at least one value is positive 
// using some()
// const atLeastOnePositive = numbers.some(value => {
//     return value >= 0 ;
// })

// console.log(atLeastOnePositive);

// const filtered = numbers.filter(value => value >= 0);

// mapping an array 
// mapping to a string
// const item = filtered.map(n => '<li>' + n + '</li>');
const item = numbers
    .filter(n => n >= 0)
    .map(n => ({value: n}))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);
// const html = '<ul>' + item.join('') + '</ul>';
// console.log(filtered);
console.log(item);
// console.log(html);







