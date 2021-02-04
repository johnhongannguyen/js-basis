/* PRIMITIVES TYPES */
const numbers = [1,2,3,4,1]; 

// pass an element we're looking for
// if the result is not found 
// will be -1 
console.log(numbers.indexOf('a'));
// this log is to get number 1 from index of 2 
console.log(numbers.indexOf(1, 2)); // will get 4


// if it's in the array
// return the position of the value

console.log(numbers.indexOf(1));

// show the last value in the array

console.log(numbers.lastIndexOf(1));

console.log(numbers.indexOf(1) !== -1);

// given an exist element in the array 
console.log(numbers.includes(1));


/* REFERENCE TYPES */
const courses = [
    {id: 1 , name: 'a'},
    {id: 2 , name: 'b'}
]

// const course = courses.find(function(course) {
//     return course.name === 'a'; // if there is none in the array - return undefined
// })

// in case of finding the index of the element
const course = courses.findIndex(function(course) {
    return course.name === 'a'; // if there is none in the array - return undefined
})

console.log(course);

