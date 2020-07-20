
/*
accumulator
The accumulator accumulates the callback's return values; it is the accumulated value previously returned in the last 
invocation of the callback, or initialValue, if supplied.

currentValue
The current element being processed in the array.

currentIndex Optional
The index of the current element being processed in the array. Starts at index 0, if an initialValue is provided, 
and at index 1 otherwise.

array Optional
The array reduce() was called upon.

initialValue Optional
Value to use as the first argument to the first call of the callback. If no initial value is supplied,
the first element in the array will be used. Calling reduce() on an empty array without an initial value is an error.
*/
// a
var nums = [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
    console.log(accumulator)
    console.log(currentValue)
    console.log("_____________")
    return accumulator + currentValue;
  },10);

  // b
var num2 =  [0, 1, 2, 3, 4].reduce( (accumulator, currentValue, currentIndex, array) => accumulator + currentValue );

console.log(nums);
//console.log(num2);