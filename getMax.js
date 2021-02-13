const numbers = [1,2,3,4];

const array1 = [22,33,55,66];
const array2 = [21,4,3,5,100];

const max = getMax(array2);

console.log(max);

function getMax(array){
    // if(array.length === 0) return undefined;
    // for(let e of array)
    //     console.log(Math.max(...array));
    
    // solution 1
    // if(array.length === 0) return undefined;

    // let max = array[0];
    // for(let i = 1; i < array.length ; i++)
    //     if(array[i] > max)
    //     max = array[i]
    //     return max;

    //solution 2
    return array.reduce((accumulator,current) => (accumulator,current) ? accumulator : current);
}