const numbers = [1,2,3,4]; 

const output = move(numbers, 1 ,0);

console.log(output);

function move(array, index, offset){
    // validation
    // define position 
    const position = index + offset;
    if(position >= array.length){
        console.log('Invalid Offset');
        return;
    }

    // copy the array because we don't want to modify it
    // using spread operator
    // clone array
    let output = [...array];

    // to move element from array
    // use splice() 
    //in this case, remove 1 item, so we can access first element
    // that would return element we deleted
    // need to add it back to an array
    const element = output.splice(index,1)[0];
    console.log(element);
    // add it to specify position
    // using splice()
    // don't delete any item - pass 0
    // pass element we want to pass in the array 
    output.splice(position, 0, element);
    return output;

    

    

}

