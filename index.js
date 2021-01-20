 
 
 // This is my first js code
 console.log('Hello World');

 // undefined variable
 let name = null;
 console.log(name);

/* Constants */ 
// if we use constant keyword, the value cannot be changed 
 let interestRate = 0.3;
 interestRate = 1; 
 console.log(interestRate); // should be 1 


 /* Primitive Types - Title */
 name = 'John' // String Literal 
 let age =30 ; // Number
 let isApproved =  true; // Boolean Literal 
 let firstName = undefined;
 let lastName = null; // clear the value and variable 

 /* Example of Objects */

 let person = {
     name: 'John',
     age: 30
 }
 // Dot notation 
person.name = 'Linh'

// Bracket notation 
person['name'] = 'Maria';
let selection = 'name';
person[selection] = 'Rin';

 console.log(person);
 console.log(person.name);

/* Arrays */
let selectedColors = ['red','blue'];
selectedColors[2]= 'green';
console.log(selectedColors[0]);
console.log(selectedColors.length);

/* Functions */

// Performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

// calculate a value 
function square (number){
    return number * number;
}
greet('Jeans','Nguyen'); 
// let number = square(5);
console.log(square(5));

/* arithmetic operators */ 
let x = 10; 
let y = 3; 

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

// Increment (++)
// console.log(++x);
// console.log(x++);
// console.log(x); 

// Decrement (--)

/* Comparison */

// Relational 
console.log(x > 0);
console.log(x <= 1 );
console.log( x<1);

// Equality 
console.log(x === 1);
console.log( x !== 1);


/* Ternary Operator */ 
// If a customer has more than 100 pts
// they are a 'gold' customer, otherwise
// they are a 'silver' customer 

let points = 110;
let type = points > 100 ? 'gold' : 'silver'; 
console.log(type);

let myAge = 30; 

let eligibleAge = myAge >= 20 ? 'eligible' : 'not eligible';
console.log(eligibleAge);

/* Logical Operator */
// Logical AND (&&)
// Return TRUE if both operands are TRUE
console.log(true && true);
console.log (false && true); // false , if one of them false or both of false => false

// example of AND 
let highIncome = true;
let goodCreditScore = true; 
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan); // should get true 

// Logical OR (||)
// Return TRUE if one of the operand is true
let GPA = true;
let graduation = false; 
let PGWP = GPA || graduation;
console.log(PGWP);

// NOT (!);
let childAge = false; 
let childLive = false; 
let applyForSchool = childAge || childLive; 
console.log(applyForSchool,'eligible to go to school');

let rejectedSchool= !applyForSchool;
console.log(rejectedSchool,'not eligible to go to school');

// Falsy 
// undefined 
// null 
// 0 
// false 
// ' ' 
// NaN

// Anything is not falsy  -> Truthy 
// e.g false || 1 || 2 -> 1 
// that is short- circuiting 

let userColor = undefined; 
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);

/* Bitwise */ 
// 1 = 00000001
// 2 = 00000010
// 3 = 00000011

// Read, Write, Execute 
// 00000100
// 00000010
// 00000001

console.log(1 | 2);
const readPermission = 4;
const writePermission = 2;
const executePermission = 1; 

let myPermission = 0; 
myPermission = myPermission | writePermission | readPermission;
console.log(myPermission);

let message = (myPermission & writePermission & readPermission) ? 'Yes' : 'No';
console.log(message);

/* Operator Precedence */
let z = 2 + 3 * 4 ;
console.log(z); // should get 14 
let z1 = (2 + 3) * 4 //  should get 20 
// this is because higher level from precedence than others. 

/* Swapping Variables */ 

let a = 'red'; 
let b = 'blue'; 
let c = a; 
a=b ; 
b=c; 
console.log(a);
console.log(b);

// [a,b] = [b,a];
// console.log(a,b);



 

