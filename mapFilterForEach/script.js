
var array = [1,2,6,59,];

array.unshift(5,6); //add value at the start of the array

array.push(5,36,25); // add value at the end of the array

array.sort() //The sort() method sorts the elements of an array

array.reverse(); // reverse the array

array.shift(); // removes the first element

array.pop() // The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

array.join() // The join() method creates and returns a new string by concatenating all of the elements in an array

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
array.slice(2,4); 

// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
//array.some() 

// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
array.splice()

// The values() method returns a new Array Iterator object that contains the values for each index in the array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values
//array.values() 

// The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
//array.reduceRight();

// The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys
array.keys() 

/********************************************************************************************************************** */
/**
 * MAP
 */

const years = [1990, 1977, 2018, 2019];

// ES5
// this is a callback function
var ages5 = years.map(function (el) {
    return 2019 - el;
});

console.log(ages5);

// ES6 can use an arrow function indstead
let ages6 = years.map(el => 2019 - el);
console.log(ages6);

// if you want to use to arguments
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2019 - el}.`)

console.log(ages6);

// if you want to use more than one line of code you have to use the curl braces {}
// Importent to remember is that in the case below you have to use return !!!!! 
ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`

});

console.log(ages6);


/********************************************************************************************************************* */
/**
 * FOREACH
 */
var names = ['Steve', "John", "Carls", "Monika", "Michelle"];
// for each does not return a new array.
names.forEach(function(value, index){
    console.log(index+1+' '+value);
});

const list = names.filter(name => name.includes('a'));

/********************************************************************************************************************** */
/**
 * FILTER
 */


var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

var carsNewerThan = cars.filter(cars => cars.year > 1999);
//console.log(carsNewerThan);
var onlyVolvo = cars.filter(cars => cars.make === 'Volvo');
//console.log(onlyVolvo);
var priceBelow = cars.filter(cars => cars.price < 5000);
//console.log(priceBelow);

function refYear(year) {
    // Lamda => is a funtion
    console.log(carsNewerThan = cars.filter(car => car.year > year));
};

function refCarType(carType) {
    console.log(carsType = cars.filter(car => car.make === carType));
};


function refBelowPrice(price) {
    console.log(carsPriceBelow = cars.filter(function (car) {
        // return each car where the price is less den "price"
        return car.price < price
    }));
};

function filtercars(text, type) {
    //functions called "filterCars"
    var filterCars = cars.filter(car => {
        // car[type] === car.year or car.made or car.price......
        var value = car[type];
        // returns all cars with a certain type and value and saves it in var filterCars
        // exsample: car.price === 3000 
        return value === text;

    })
    // return a array with filtert cars
    return filterCars;
};


