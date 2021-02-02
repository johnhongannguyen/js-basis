// we initialized this object, the memory is automatically allocated 
// to this object, next we can use it 
// and when we are done , we don't need to deallocate the memory 
// JS engine has what we call a garbage collector 
// the job of the garbage collector is to fin the variables or constants
// that we are no longer used and then deallocate it 


// // string primitive
// const message = 'hi, this is my first message';

// // string object 
// const another = String('hi');

const name = 'John';
// old way 
const message = 'Hi' + name + ',\n';

const another = 
`Hi ${name} ${2 + 3}
Welcome to my team

Hope you're doing well !!!`