/**
 * Lecture Map()
 */

const question = new Map();

// First Parameter is a key value og the second parameter is the value. Like in hash map.
question.set(
  "question",
  "What is the official name of the latest major javascript version?"
);

question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES2015");
question.set(4, "ES7");
question.set(5, "ES7");
question.set("correct", 3);
question.set(true, "Correct answer");
question.set(false, "Wrong answer. Please try again!");

// use get to retrieve a value with help of the key
console.log(question.get("question"));

// If you want to know the length of the map
console.log(question.size);

// Map() has another option called "has". You can use it like this:

if (question.has(4)) {
  question.delete(4);
}

// if you want to delete the entire map you can use clear

// question.clear();

//********************************************************************************* */

// Map()'s are iterable

// for each
question.forEach((value, key) =>
console.log(`This is the ${key} and that is the ${value}`));

// or use for of loop
// question.entries() is returning  all the key-value pairs, and so we can use destructuring. [key, value]
for ( let [key, value] of question.entries()){
    console.log(`This is the ${key} and that is the ${value}`);

}


//If you only want to print numbers
for ( let [key, value] of question.entries()){
    if(typeof(key) === 'number'){
        console.log(`Answer ${key}: ${value}`);
        
    }
}


const ans = parseInt(prompt('Write the correct answer'));

console.log(question.get( ans === question.get('correct')));
 