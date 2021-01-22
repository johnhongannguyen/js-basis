// Landscape or Portrait 
// if Landscape - width > height
// if Portrait - width < height 
// let image = isLandscape(45,25);
// console.log(image);
console.log(isLandscape(300,600));
function isLandscape(width,height){
    return (width > height);
}

// divisible by 3 => Fizz
// divisible by 5 => Buzz
// divisible by both 3 or 5 => FizzBuzz
// not divisible by 3 or 5 => input
// not a number => 'not a number'
let output = fizzBuzz(35);
console.log(output);

function fizzBuzz(input){
    if(typeof input !== 'number')
    return NaN;
    if((input % 3 === 0) && (input % 5 == 0)) return 'FizzBuzz'
    else if(input % 5 === 0 ) return 'Buzz'
    else if(input % 3 === 0 )return 'Fizz';
    return input;
}
