const numbers = [1,2,3,4];

const max = getMax(numbers);

console.log(max);

function getMax(array){
    
    for(let e of array)
        console.log(Math.max(...array),e);
}