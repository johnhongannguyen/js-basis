// function declaration
walk(); // can define it before it is defined 
function walk() {
    console.log('walk')
}

// function expression 
// but it doesn't work for function expression - uncaught reference error 
let run = function() {
    console.log('run');
};

let move = run;
run ();
move ();

// what is hoisting in Javascript 
// Hoisting is the process of moving function declarations to the top of the file
// and this is automatically by the Javascript engine that is executing this code
// so that's the reason we can call functions that are defined using the function declaration syntax before definition




