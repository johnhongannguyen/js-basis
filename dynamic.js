// because constant for the circle at the beginning
// we cannot reassign a new object for the circle, but we can add new properties for it

const circle = {
    radius: 1
}; 

// add properties in the object
circle.color = 'yellow';
// add function
circle.draw = function () {};

//delete properties of the object

delete circle.color;
delete circle.draw;

console.log(circle);