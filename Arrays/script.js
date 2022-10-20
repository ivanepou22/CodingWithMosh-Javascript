// Arrays
const numbers = [3, 4];

//add new elements to the end of an array
numbers.push(5, 6, 7, 8)

//add new elements to the beginning of an array
numbers.unshift(1, 2);

//add new elements to the middle of an array
numbers.splice(3, 0, 'a', 'b')

//returning the index
// console.log(numbers.indexOf(5))

//Checking for a given element in an array
// console.log(numbers.includes(8))

//finding reference Types
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
]

const course = courses.find(
    function (course) {
        return course.name === 'a';
    }
)

const courseIndex = courses.findIndex(
    function (course) {
        return course.name === 'a';
    }
)

//using Arrow Functions

const courseArr = courses.find(course => course.name === 'a');

//removing elements to an array

//End

const last = numbers.pop();

//Beginning
const first = numbers.shift()

//Middle
numbers.splice(1, 1);

//Removing all the elements in an array
//-- Set length to Zero
numbers.length = 0;
//--Use the splice method
numbers.splice(0, numbers.length)
//-- Using the pop method
while (numbers.length > 0)
    numbers.pop();

//=================================
//Combining and splitting an Array

const firstArray = [1,2,3];
const second = [4,5,6];

const combined = firstArray.concat(second);

const spliced = combined.slice(0,4)

//Spread Operator
const spreadCombined = [...firstArray, ...second];
const copy = [...spreadCombined]
// console.log(spreadCombined)

//========= Array Iteration
 const digits = [1,2,3,4,5,6];
  //Using [for Of]

  for (let digit of digits)
    console.log(`${digits.indexOf(digit)} -> ${digit}`);

    // Using a forEach
digits.forEach((digit, index) => console.log(index, digit))

//Join Method

const joined = digits.join(',');
// console.log(joined)

//The Split method
const message = 'This is my first message';
const split = message.split(' ');
// console.log(split);

const JoinedMessage = split.join(' ');
// console.log(JoinedMessage)

//Sorting Arrays
const num = [2,4,1,3,8,6,-1];
const sorted = num.sort();

//Reverse sort arrays
const reverse = num.reverse();
// console.log(reverse)

//Sorting Arrays with object elements
const myCourses = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'javascript'}
];

myCourses.sort(function(a, b) {
    //a < b => -1,
    //a > b => 1,
    //a===b => 0

    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if( nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;
})

// console.log(myCourses);

//every() -> method
//check if the number has only positive numbers

const allPositive = num.every(function(value){
    return value >=0
})

//some() => Method
const atLeastOnePositive = num.some(value => {
    return value >= 0;
})
// console.log(atLeastOnePositive);


//============Filtering Arrays==============
const numbers1 = [4,8,9,2,3,-4,5,-9,-3];
//Positives
const positivesOnly = numbers1.filter(number => number >= 0).sort();
// console.log(positivesOnly);

//Negatives
const negatives = numbers1.filter(number => number < 0).sort();
// console.log(negatives)

//=====================map============
const items = numbers1
.filter(n => n >= 0)
.sort()
.map(item => ({value: item}))
// const joinedItems = '<ul>'+items.join('')+'</ul>';
// console.log(items);

//==============Reducing an array==========
//calculate the sum

//1. Solution One.
let sum = 0;
for(let n of numbers1)
    sum += n;
// console.log(sum);

//2. Solution Two. using the reducer function
const sum1 = numbers1.reduce(
    (accumulator, currentValue) => accumulator+currentValue
)
console.log(sum1);
