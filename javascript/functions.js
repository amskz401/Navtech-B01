// sum

// console.log(a);

// var a = 10;

// console.log(a);

// let sum = (a, b) => {
//   return a + b;
// };

// console.log(sum(12, 32));

// function b( () => { return "a" } ) {
//     console.log("b");
// }

// Callback function, passed as a parameter in the higher order function
// function a() {
//   console.log("I am  a callback function");
// }
// // higher order function
// function a(func) {
//   console.log("I am higher order function");
//   func();
// }

// a();

function a(flag = false) {
  console.log("logged in");
  return flag;
}

function b(a) {
  if (true) return;

  console.log("enter credentials");
}

b(a(true));

function a() {
  console.log("i am recursion");
  a();
}

a();
