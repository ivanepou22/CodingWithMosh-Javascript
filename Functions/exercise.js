//sum of varying arguments
function sum(...values){
    if(values.length === 1 && Array.isArray(values[0]))
        values = [...values[0]];

    return values.reduce((a,b) => a+b)
}

//Area of a circle

const circle = {
    radius: 2.5,
    get area(){
        return Math.PI * this.radius * this.radius;
    }
}

//Exceptions handling.
function countOccurrences(array, searchElement) {
    if(!Array.isArray(array))
        throw new Error('Invalid Array');

    return array.reduce((acc, cu) => {
        const occurrence = (cu === searchElement) ? 1:0;
        return acc + occurrence;
    }, 0);
}

try {
    const numbers = true;
    const count = countOccurrences(numbers, 1);
    console.log(count);
} catch(e){
    console.log(e.message);
}