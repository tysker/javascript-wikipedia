/**
 * CLOSURES
 *
 * Summary
 * An inner function has always access to the variables and parameters
 * of it's outer function, even after the outer function has returned.
 */

function retirement(retirmentAge) {
  let a = " years left of retirement.";
  return function (yearOfBirth) {
    let age = 2016 - yearOfBirth;
    console.log(retirmentAge - age + a);
  };
}

let retirmentUs = retirement(66);
retirmentUs(1990);

let retirmentEU = retirement(65)(1977);

/** 

interviewQuestion = (job) => {
    if(job === 'designer') {
        return (name) => {
            console.log(`${name}, can you please explain what UX design means?`);
        }
    } else if(job === 'teacher') {
       return (name) => {
           console.log(`${name}, which subject do you teach?`);
       }
    } else {
        return () => console.log("What do you do ?");
    }
};
*/

function interviewQuestion(job) {
  return function (name) {
    if (job === "designer") {
      console.log(`${name}, can you please explain what UX design means?`);
    } else if (job === "teacher") {
      console.log(`${name}, which subject do you teach?`);
    } else {
      console.log("What do you do ?");
    }
  };
}

let teacherQuestion = interviewQuestion("teacher")("Paul");
