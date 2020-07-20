/**
 * CALLBACK FUNCTIONS
 */

let years = [1990, 1855, 1552, 1977, 2020, 2005];

arrayCalc = (arr, fn) => {
  let arrRes = [];
  for (let index = 0; index < arr.length; index++) {
    arrRes.push(fn(arr[index]));
  }
  return arrRes;
};

calculateAge = (el) => 2020 - el;
isFullAge = (el) => el >= 18;
maxHeartRate = (el) => {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  }else{
      return -1;
  }
};

let ages = arrayCalc(years, calculateAge);
let fullAge = arrayCalc(ages, isFullAge);
let heartRate = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAge);
console.log(heartRate);


/**
 * FUNCTIONS RETURNING FUNCTIONS
 */

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

 let teacherQuestion = interviewQuestion("teacher");
 teacherQuestion("John");
 
 // One liner. It's evaluate from left to right

 interviewQuestion('designer')('Steve');