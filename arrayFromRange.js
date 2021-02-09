const numbers = arrayFromRange(0,10);

console.log(numbers);

function arrayFromRange(min,max) {
    let array = [];
    for(let i = min; i <= max; i++)
        array.push(i);
        return array;
}