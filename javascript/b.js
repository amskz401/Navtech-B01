// null
// Number 123456
// Symbol
// String
// boolian true and false
// BigInt
// undefined

// Array & Objects

// const newobj = {name:"bilal", city:"Multan", country:"pakistan", age:123}

// // console.log(newobj.name)
// newobj = "ahmad"
// // let {name} = newobj

// console.log(newobj)

// let arr1 = [1, 2, 3];

// let arr2 = [
//   { name: "bilal", city: "Multan", country: "pakistan", age: 123 },
//   { name: "ahmad", city: "Lahore", country: "dubao", age: 456 },
// ];

// let arr3 = [1, 2, 3];

// console.log(arr1.toString() === arr3.toString());

// console.log(arr2[0].name)
// console.log(arr1==arr3);

// iife
// let sum = (() => {
//   console.log(5);
// });

// (() => {
//   console.log(5);
// })();

// function printObj() {
//   let obj = {
//     id: 1,
//     name: "Farhan",
//     email: "farhan@m.com",
//   };
//   console.log(obj);
// }

// (() => {
//   let obj = {
//     id: 1,
//     name: "Farhan",
//     email: "farhan@m.com",
//   };
//   console.log(obj);
// })();

for (let index = 1; index <= 10; index++) {
  console.log(process.argv[2] * index);
}
