function sum(){
    // special objects are indexes of args which are passed to this function
    let total = 0 ;
    for(let value of arguments)
        total += value;
        return total;
}

console.log(sum(1,2,3,4,5)) // this will return NaN
// because 2 parameters are undefined - undefined + undefined 