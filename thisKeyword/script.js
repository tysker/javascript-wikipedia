/**
 * JavaScript:
 * Regular function call:
 * The this keyword points at the global object, (the window object in the browser)
 * 
 * Method call :
 * The this variable points to the object that is calling the method.
 * 
 * The this keyword is not assigned a value until the function where it is defined is actually called.
 * 
 */

// That is the window(browser) object. The window object is the default object in JavaScript
console.log(this)


//this is a regular function call, so the this keyword still points to the window object
calculateAge(1977);//output: 42 and window object

function calculateAge(year) {
    console.log(2019 - year)
    console.log(this)
}

// The this variable points to the object that is calling the method. The "john" object

var john = {
    name: 'John',
    yearOfBirth: 1977,
    calculateAge: function () {
        console.log(this);
        console.log(2019 - this.yearOfBirth);
    }
}

john.calculateAge();//output: john object and 42

// object with a regular function call. And again the this keyword in the innerFunction
// points to the global window object
var hans = {
    name: 'Hans',
    yearOfBirth: 1977,
    calculateAge: function () {
        console.log(this);
        console.log(2019 - this.yearOfBirth);

        function innerFunction() {
            console.log(this + "hallo");

        }
        innerFunction();
    }
    
}

hans.calculateAge();// output: 42 and window object

// Method "borrowing"
// And again the "this" keyword is only assigned a value when the object calls the method.  

var mike = {
    name: 'Mike',
    yearOfBirth: 1990,
}
// mike is borrowing johns calculate method
mike.calculateAge = john.calculateAge;
mike.calculateAge();//output 29