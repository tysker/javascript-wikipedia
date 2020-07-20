/**
 *  OBJECT
 */

// Quick Objects

mike = {
  name: "Mike",
  yearOfBirth: 1985,
  job: "cook",
};
console.log(mike);

// **Function Constructure**

// ES6 version
class Human {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
}
console.log(Human);

// old version
const Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};
console.log(Person);

/**
 * Inheritance
 * Add a function to the prototype property constructor/chain
 *
 * Doing it that way, we don't create a copy each time we instancinate a new object.
 */

Person.prototype.calculateAge = function () {
  console.log(2020 - this.yearOfBirth);
};

Person.prototype.lastName = "Hansen";

Human.prototype.calculateAge = () => {
  console.log(2020 - this.yearOfBirth);
};

let steve = new Person("Steve", 1990, "teacher");
let madonna = new Person("Madonna", 1772, "singer");
steve.calculateAge();
madonna.calculateAge();
console.log(steve.lastName);
console.log(madonna.lastName);

let joerg = new Human("Jörg", 1977, "datamatiker");
joerg.calculateAge();
console.log(joerg);

// From the object object prototype. See browser console for more info!
console.log(steve.__proto__ === Person.prototype);
console.log(joerg.__proto__ === Human.prototype);
console.log(steve.hasOwnProperty("job"));
console.log(steve instanceof Person);
console.info(steve);

/**
 * Object.create
 */

let personProto = {
  calculateAge: () => {
    console.log(2020 - this.yearOfBirth);
  },
};

let anna = Object.create(personProto, {
    name: {value: "Anna"},
    yearOfBirth: {value: 1978},
    job: { value: "sals manager"}
})
