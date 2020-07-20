
/**
 * The Spread Operator
 */


 // 1.Eksample
var number = [1,2,3,4]
var num = [...number,5,6]

// output: 1,2,3,4,5,6
console.log(num);


// 2. Eksample
const Person = {
    name: 'Joe'
}

const newPerson = {
    ...Person,
    age: 25
}

// output: name: joe age: 25
console.log(newPerson);


/**
 * The Rest Operator
 */

 //

const filter = (...args) => args.filter( el => el === 1);

// output: 1,1
console.log(filter(1,2,1,3,5));