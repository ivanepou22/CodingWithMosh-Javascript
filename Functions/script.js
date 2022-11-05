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
        total += value;
    console.log(total)
}

var rock = function () {
    console.log("Rock")
}


//hoisting -> this is the process of moving function declarations
//to the top of the file.

//Rest operator
// Rest Parameter must be the last formal parameter
function sum1(...args) {
    return args.reduce((a, b) => a + b)
}

function sum2(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

// console.log(sum2(0.1, 20,30))

//default parameters
//ones u give a parameter a default value, all other values after than should a default value.
function interest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}

// console.log(interest(10000,3.5,5))

//Getters and setters
//getters => Access properties.
//setters => change or mutate properties.
const person = {
    firstName: 'Ivan',
    lastName: 'Epou',
    //getter
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    //setters
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
person.fullName = 'Dyron Smith';
// console.log(person)

//Error Handling
//Defensive Programming - Handling errors at the beginning of the function.

const person1 = {
    firstName: 'Ivan',
    lastName: 'Epou',
    //getter
    get fullName() {
        return `${person1.firstName} ${person1.lastName}`
    },
    //setters
    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('Value is not a string') //throw exceptions.

        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter a valid fullName Pliz.')

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person1.fullName = true;
} catch (e) {
    console.log(e);
}

//Scopes (Local and Global)
//var => function scope
//ES6 (ES2015): let, let => block-scoped
//var keyword -> attaches a global variable to a window object.
//let keyword -> does not attach a global variable to a window object.
//Global functions are added to the window object.

//The (this) keyword
//Represents the object that is executing the current function.
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag)
        }, this)
    }
}

//Changing the value of (this).
const video1 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        const self = this; //change this
        this.tags.forEach(function (tag) {
            console.log(self.title, tag)
        })
    }
}

//approach two. (call and apply);

function playVideo(){
    console.log(this);
}

playVideo.call({name: 'Ivan'}, 1,2,30); //call()
playVideo.apply({name: 'Ivan'}, [1,2,3,4]); //apply()
playVideo.bind({name: 'Ivan'})(); //bind - Returns a function

//use the bind method
const video2 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag)
        }.bind(this));
    }
}

//using Arrow functions - Arrow functions inherit the this object.

const video3 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag)
        })
    }
}

video3.showTags();