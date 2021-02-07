// const numbers = [2,1,3];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

const courses = [
    {
        id : 1,
        name: 'Node.js'
    },
    {
        id: 2,
        name: 'javaScript'
    }
]

courses.sort((a,b) => {
    // a < b => -1
    // a > b => 1
    // a === b => 0
    // because ascii table shows that j lowercase is bigger than N uppercase
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;
})

console.log(courses);