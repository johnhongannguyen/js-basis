const numbers = [1,2,3,4,2,1,1];

const count = countOccurrences(numbers, 2);

console.log(count);

function countOccurrences(array, searchElement){
    // let count = 0;
    // for(let e of array)
    //     if(e === searchElement)
    //         count ++;
    //         return count;

    // accumulator represents the number of times the search element has occurred in the array
    // so initialize this to 0
    // every time callback function is called 
    // you want to compare this currentValue with searchElement
    // if they are equal, we should return accumulator +1
    // otherwise we should return accumulator
    return array.reduce((accumulator,currentValue) => {
        const occurrence = (currentValue === searchElement) ? 1 : 0 ;
        console.log(accumulator,currentValue, searchElement);
        return accumulator + occurrence
    },0);

}