// var, let, const

// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   //   0 - 9;
// }

// console.log(i); // 0, 9, 10, error;

// {
//   var a = 10;
//   console.log(a);
// }

// console.log(a);

// Arithmetic Operations (+, -, /, *, **, %, ++, --);

// let a = "10";
// let b = 20;
// console.log(a++); // post icrement

// console.log(a);

// console.log(++a); // pre increment

// console.log(b); //

// let a = 10;
// let b = 20;
// console.log(b + a);

// assignment operators
// let a = 10;
// let b = 54;
// let sum = a + b;

// console.log("Sum is : " + sum);

let a = 10;

a += 25; // a = a + 25;

// console.log(a);

let b = 0;

b++; // 1

let c = "12";

console.log(typeof c == "number");

let c1 = 12;

console.log(c == c1); // compare only values

console.log(c === c1); // compare values and data type

console.log(c1 >= 12);

console.log(c >= 12 ? "ok" : "not ok"); // ternary operator

// result card
// if (c >= 12 && typeof c == "number") {
//   console.log("ok");
// } else {
//   console.log("not ok");
// }
let number = 80;
let age = 16;
let gender = "female";
// if (number > 90 && age == 16 && gender == "male") {
//   console.log("A+");
// } else if (number > 80) {
//   console.log("A");
// } else if (number > 75) {
//   console.log("B+");
// } else {
//   console.log("C");
// }
// if (number > 90 || gender == "male") {
//   console.log("A+");
// } else if (number > 80) {
//   console.log("A");
// } else if (number > 75) {
//   console.log("B+");
// } else {
//   console.log("C");
// }

// 95, 16, female
// if (number > 90 && (age == 15 || gender == "female")) {
//   console.log("A+");
// } else if (number > 80) {
//   console.log("A");
// } else if (number > 75) {
//   console.log("B+");
// } else {
//   console.log("C");
// }

/**
 *
 * Multiple Lines Comments
 *
 */

if (!(a > 90)) {
  console.log("ok");
} else {
  console.log("not ok");
}
