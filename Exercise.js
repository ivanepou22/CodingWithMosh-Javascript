//Generate anArray from a range
function arrayFromRange(min, max) {
    let array = [];
    for (let i = min; i <= max; i++) {
        array.push(i);
    }
    return array;
}

let numbers = arrayFromRange(1, 5);

//implement the includes method for arrays
function includes(array, searchElement) {
    for (let i of array) {
        if (searchElement === i)
            return true;
    }
    return false;
}

//function that removes elements from an array

function exclude(array, excluded) {
    let newArray = [];
    for (let element of array)
        if (!excluded.includes(element))
            newArray.push(element);

    return newArray;
}
let numbers1 = [1, 9, 1, 6, 8, 1, 2, 4, 2, 3]
let excNumbers = exclude(numbers1, [1, 2, 3, 4, 9]);

//Moving the array elements to new positions
function move(array, index, offSet) {
    let arrayCopy = [...array];
    const position = index + offSet;

    if (position >= arrayCopy.length || position < 0) {
        console.log('Invalid OffSet')
        return;
    }

    const element = arrayCopy.splice(index, 1)[0];
    arrayCopy.splice(index + offSet, 0, element);
    return arrayCopy;
}

//counting the Occurrences of an element in an array
let number2 = [1, 2, 5, 6, 8, 4, 1, 2, 6, 1]
function countOccurrence(array, element) {
    // let totalOccurrence = 0;
    // for (let elem of array)
    //     if (elem === element)
    //         totalOccurrence += 1;
    // return totalOccurrence;

    //using reducer

    return array.reduce((accumulator, current) => {
        let occurrences = (current === element) ? 1: 0;
        return accumulator + occurrences;
    }, 0)
}

//getting the max value from an array
function getMax(array){
    if(array.length === 0) return undefined;

    // let max = array[0];

    // for( let i = 1; i < array.length; i++)
    //     if(array[i] > max)
    //         max = array[i];
    // return max;

    //Using the reducer
     return array.reduce((a, b) => (a > b) ? a: b);
}

//objects
const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 4.3},
    {title: 'd', year: 2018, rating: 3},
    {title: 'e', year: 2017, rating: 4.5}
];

function filterSortMovies(movies){
    //all the movies in 2018 with rating >= 4
    //Sort them by their rating
    //descending order
    //Pick their titles

    return movies.
    filter(movie => (movie.year === 2018 && movie.rating >= 4))
    .sort((a ,b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title);
}

console.log(filterSortMovies(movies))