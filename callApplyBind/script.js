/** The purpose of the methods call(), apply() and bind()
*
* The different between call() and apply()
* Note: While the syntax of this function is almost identical to that of call(), the fundamental difference is 
* that call() accepts an argument list, while apply() accepts a single array of arguments.
*********************************************************************************************************
* call()
* call() provides a new value of this to the function/method. With call, you can write a method once 
* and then inherit it in another object,
* without having to rewrite the method for the new object
******************************************************************************************************
* The call() allows for a function/method belonging to one object to be assigned and called for a different object.
* In this case the object Product is assigned and called from the Food object
**/


function Product(name, price) {
    this.name = name;
    this.price = price;
  }

function Origin(countryOfOrigin){
    this.countryOfOrigin = countryOfOrigin;
}
  //this points to the object Product
  function Food(name, price, countryOfOrigin) {
    Product.call(this, name, price);
    Origin.call(this,countryOfOrigin);
  };

  var milch = new Food("Milch",10,"Germany");

  console.log(new Food('cheese', 5, "Turkey").name);
  console.log(milch);
 

//******************************************************************************************* */
// apply()

// The apply() method calls a function with a given this value, 
// and arguments provided as an array (or an array-like object).

// Using apply to append an array to another
var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]

//************************************************************************************************* */

//bind()
//The bind() method creates a new function that, when called, has its this keyword set to the provided value, 
//with a given sequence of arguments preceding any provided when the new function is called.


var module = {
  x: 42,
  getX: function() {
    return this.x;
  }
}

var unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

var boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42