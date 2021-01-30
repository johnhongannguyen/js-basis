// let radius = 1;
// let x = 1;
// let y = 1;

// what we got here is object oriented programming style (OOP)
// OOP is basically a style of programming where we see a program as a collection of object 
// that talk to each other to perform some functionality 

// circle object have different properties and different functions 
// in OOP terms, if function is a part of object we call that function is method
//


// we don't need these function for a circle object
// function draw () {

// }
// function move () {

// }

// access the object 
// circle.draw(); // method

// Factory function
// produce object
function createCircle(radius) {
    // const circle = 
        return {
        radius,
        // factory function
        draw(){
            console.log('you can draw a circle');
        },
        move() {
            console.log('move')
        }
            
    };
    
}

const circle1 = createCircle(9);
console.log(circle1);

const circle2 = createCircle(20);
console.log(circle2);
console.log(circle2.draw());


// constructor function
// often use Pascal Notation : OneTwoThreeFour
// keyword this - it is a reference to the object
// that is executing a piece of code 
// imagine this references an empty object 

function Circle(radius){
    this.radius = radius;
    this.draw = function () {
        console.log('drawing');
    }
    // return this; - it is happened under the hood
}

// this new operator - 3 things happen 
// 1. creating an empty JS object , e.g const x = {}
// that happening under the hood, we don't see that 
// 2.  it will set 'this' to point this new empty object 
// 3.  this new operator will return this new object(x) from this function

const circle = new Circle(3);
console.log(circle);