// varidable declarations
// var, let, const;

var validator = require("email-validator");
let a = 45;

// console.log(a);

let em = "farhan@m.com";

// console.log(validator.validate(em));

let arr = [12, 3, 4, 56, 77];
let getN = [];

let narr = arr.filter((x) => {
  return x < 20;
});

console.log(narr);
// arr.forEach((ele) => {
//     if(ele < 10) {
//         getN.push(ele);
//     }
//   console.log(ele + 2);
// });

// let narr = arr.map((ele) => {
//   return ele + 2;
// });

// console.log(arr);
// console.log(narr);

const os = require("os");
console.log(os.hostname());
console.log(os.machine());
console.log(os.platform());