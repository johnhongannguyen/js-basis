const circle = {
    radius: 1,
    draw () {
        console.log('drawing');
    }
};
// example of enumerating Properties 
// for(let key in circle)
// console.log(key, circle[key]);

// for(let key of Object.keys(circle))
// console.log(key);

// for(let entry of Object.entries(circle))
// console.log(entry);

// if('radius' in circle) console.log('yes');

// const another = {};
// old way to get enumerate an object
// for(let key in circle)
//     another[key] = circle[key];
// another['radius'] = circle['radius'];

// cloning an object 
// one way use object.assign method 
// const another = Object.assign({
//     color: 'yellow'
// },circle);

// another way to clone an object 
// ... to spread the circle object 
// ... (this operator) takes all the properties and method in the circle{}
// and put them in the new object
const another = {...circle}

console.log(another);


