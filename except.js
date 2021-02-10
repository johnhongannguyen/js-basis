const numbers = [1,2,3,4];

const output = except(numbers,[1]);

console.log(output);

function except(array,excluded){
    let output = [];
    for(let e of array)
        if(!excluded.includes(e))
             output.push(e);
        return output
}