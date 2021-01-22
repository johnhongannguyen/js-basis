// Hour 
// If hour is between 6am and 12pm:  Good Morning
// If it is between 12pm and 6pm: Good afternoon 
// Otherwise:  Good evening 

// if (condition) {
//     statement
// }
// else if (anotherCondition){
//     statement 
// }
// else if(yetAnotherCondition){

// }
// // one or more condition to true use else
// else
// statement

let hour = 10;
if(hour >= 6 && hour < 12)
    console.log ('Good Morning');
else if(hour >= 12 && hour < 18)
    console.log('Good afternoon');
else
console.log ('Good evening');

// switch... case

let role; 
// in parentheses we add variable
switch (role){
    case 'guest':
        console.log('Guest user');
        break; // the reason to add 'break' is avoiding executing the next argument


    case 'moderator':
        console.log('Moderator user');
        break;

    default:
        console.log('Unknown User');
}

// if condition 
if (role === 'guest') console.log('Guest')
else if (role === 'moderator') console.log('Moderator')
else console.log('Unknown User');

// For loops
// for(initialExpression; condition ; increment expression)
// statement 

for(let i = 1; i <=5 ; i++){
    // console.log('Hello John', i);
    if (i % 2 !== 0) console.log(i)

}

// reverse order 
for(let y = 10; y >= 1; y-- ){
    if(y % 4 !== 0 ) console.log('not divide for number 4',y );
}

// this is the way I fixed master branch 
// While loop
// In While loop, we have declare variables 
let e = 0;
while(e <=5){
    if(e % 2 !== 0 )console.log(e);
    e++;
}

// Do While loop
// can do at least once 
let c = 9 
do{
    if(c % 2 !== 0) console.log(c);
    c++;
} while(c <=5 );

// Infinite Loop
// execute infinitely or forever
// For in 
const person = {
    name: 'John',
    age: 30
}

for (let key in person)
console.log(key, person[key]);

const colors = ['red','blue','green'];

// for(let index in colors)
// console.log(index, colors[index]);

// For of 
for(let color of colors)
 console.log(color)

 // break and continue 
 let x = 0;
 while(x <=10){
     // jump out of the loop
     if( x === 5)break;
     // continue the loop
     if(x % 2 === 0){
         x++;
         continue;
     }


    console.log(x);
    x++;
 }
// write a function that takes 2 numbers and return the maximum of two 

// let a = 10;
// let b = 12; 
// function max(){
//     let max; 
//     if(max = a>b){
//         console.log(`Max number is ${max}`);
//     }
//     else
//     console.log(`Max number is ${b} `)
// }

// console.log(max());

// other solution
let number = max(32,20);
console.log(number);
function max(number1,number2){
    // using if condition
    // if(number1 > number2)
    // return number1;
    // return number2;
    

    // Using Ternary Operator
   return (number1 > number2) ? number1 : number2;

}
