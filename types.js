// Primitive types
// let x = 10;
// let y = x; 

// x = 20 ; 
// actually x =20 and y =10 
// they are independent

// reference types; 

// let x = {value: 10};
// let y = x;

// x.value = 20;
// example of primitives

let number = 10 ;
function increase (number){
    number++;
}
increase(number);
console.log(number);

// example of obj 

let obj = {value:10};

function increase(obj){
    obj.value++;
}
// this object is passed by it's reference 
increase(obj);
console.log(obj);