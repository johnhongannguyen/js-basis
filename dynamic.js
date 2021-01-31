// because constant for the circle at the beginning
// we cannot reassign a new object for the circle, but we can add new properties for it

// const circle = {
//     radius: 1
// }; 

// // add properties in the object
// circle.color = 'yellow';
// // add function
// circle.draw = function () {};

// //delete properties of the object

// delete circle.color;
// delete circle.draw;

// console.log(circle);

// example for functions are objects 

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('drawing')
    }
}

// const Circle1 = new Function('radius', `
// this.radius = radius;
// this.draw = function() {
//     console.log('drawing')
// }
// `);

Circle.call({},1); // exactly const another = new Circle(1)
Circle.apply({},[1,2,3]);

// // call Circle1 like a Circle1 function 
// const circle = new Circle1(1);

const another = new Circle(1);