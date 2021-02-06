// const first = [{id: 1}];
const first = [1,2,3];
const second = [4,5,6];

/* Combination */

// const combined = first.concat(second);
// first[0].id = 15;
// using spread of operator 
const combined = [...first,'a', ...second, 'b'];


/* Slicing */
// const slice = combined.slice();
const copy = [...combined];
console.log(combined);
console.log(copy);
// console.log(slice);