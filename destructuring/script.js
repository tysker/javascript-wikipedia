/**
 * Destructuring
 *
 * You can only destructure objects and arrays.
 * String can be destructured as an array or as an object.
 * Destructure a string as an object means destructuring its prototype object.
 *
 * Number and Boolean destructure their prototype object.
 *
 * Null and undefined CANNOT be destructured at all!
 */

//****************************************************************************************************/

/**
 * Destructure Array
 * It's importent for destructering an array to keep the order.
 */

let list = ["Apple", "Banana", "Craneberry"];

// Add a variable to the list
let [one, two, three, four = "Date"] = list;

let [a_fruit, , c_fruit] = list;

// second exanmple

const numbers = [1, 2, 3];
[num1, num2] = numbers;
console.log(num1, num2); // output: 1 2

[num1, , num3] = numbers;
console.log(num1, num3); // output 1 3

//****************************************************************************************************/

/**
 *  Destructure Object
 *
 *  The order of destructering an object is not importent, so long you keep the same
 *  variable name.
 */

let obj = {
  fruit: "Apple",
  vegetable: "Bean Sprouts",
  diary: "Cheese",
};

//let {fruit,vegetable,diary} = obj
//let {fruit,vegetable,diary='Milk'} = obj

/**
 *  If you want to change the variable name
 */

let { fruit: fruit_name } = obj;

/**
 * Destructering a nested object
 */

let info = {
  name: "Tom",
  address: {
    city: "Newcastle",
    street: "Northumberland Street",
    number: 17,
  },
};
let {
  name,
  address: { city, street, number },
} = info;

/**
 * Destructure example
 */

var num = -123;
let { abs } = Math;
let { abs: absolute_value } = Math; // if you want  new name for it

console.log(abs(num));
console.log(absolute_value(num));

//****************************************************************************************************/

/**
 * Destructure string
 *
 * We can destrucre it as an array or an object
 */

// ARRAY
let str = "hello, there!!!";

let [first, second, third, fourth] = str;

// OBJECT

// String inherit the prototype from its constructor.
let { length, concat, fontsize, indexOf } = str;

//****************************************************************************************************/

/**
 * Destructure number, boolean, null and undefined
 */

// NUMBER
let nr = 123;
// You can't destruct a number via an array
//let[one_,two_,three_] = nr;

// Number inherit the prototype from its constructor.
let { toString: make_number_into_string } = nr;

// BOOLEAN
// You can't destruct a boolean via an array
let bool = true;

// Boolean inherit the prototype from its constructor.
let { valueOf } = bool;

// NULL and UNDEFINED

/**
 * Null has no prototype, so we can't destructure it as an object.
 * We also can't destructure it as an array
 **/

let special_1 = null;
let special_2 = undefined;
//let {} = special

//****************************************************************************************************/

/**
 * Destructure function arguments
 */

 // OBJECT
var info_obj = {
  brand: "Nissan",
  model: "GT-R",
  engine: "Petrol",
  gearbox: "Automatic",
};

function car({ brand = "Default Brand", model = "Default Model" } = {}) {
  console.log("Brand: " + brand + "\n" + "Model: " + model);
}

car(info_obj);
car({});
car();
console.log("***************************************");

// ARRAY

var info_arr = ["Honda", "NSX", "Hybrid", "Automatic"];

function carArray([brand='Default Brand',model='Default Model']=[]){
    console.log("Brand: " +brand +'\n'+ 'Model: '+ model)
}

carArray();
carArray(info_arr);
carArray([]);
carArray([,'LX570'])
