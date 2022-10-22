//function Declaration
//Function can be called before is declared (Hoisting)
//Hoisting - Is the process of moving function declarations to be the top of the file -
//this only applies to functions with the function declaration syntax.
function walk() {
    console.log('Walk');
}

//function expressions can not be called before it's declaration.
//Anonymous function Expressions
let run = function () {
    console.log('Run');
}

//Named function Expression
let run2 = function run1() {
    console.log('Run2')
}

//using arguments

function sum() {
    let total = 0;
    for (let value of arguments)
        total+=value;
    console.log(total)
}

sum(1, 2, 5, 3);