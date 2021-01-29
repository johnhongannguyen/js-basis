// let radius = 1;
// let x = 1;
// let y = 1;

// what we got here is object oriented programming style (OOP)
// OOP is basically a style of programming where we see a program as a collection of object 
// that talk to each other to perform some functionality 

// circle object have different properties and different functions 
// in OOP terms, if function is a part of object we call that function is method
//

const circle = {
    radius: 1 ,
    location : {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log('you can draw a circle');
    },
    move: function() {
        console.log('move')
    }
};
// we don't need these function for a circle object
// function draw () {

// }
// function move () {

// }

// access the object 
circle.draw(); // method