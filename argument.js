function sum(){
    // special objects are indexes of args which are passed to this function
    let total = 0 ;
    for(let value of arguments)
        total += value;
        return total;
}

console.log(sum(1,2,3,4,5)) // this will return NaN
// because 2 parameters are undefined - undefined + undefined 


// The Rest Operator
function cost(discount,...prices){
    const total = prices.reduce((a,b) => a+b);
    return total * (1 - discount);
}

console.log(cost(0.1,20,30));