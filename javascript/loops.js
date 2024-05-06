// iterations for, while, do while, foreach, map, forof, forin;

// let n = 12;
// for (let i = 0; i <= 10; i++) {
//   console.log(n * i);
// }
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

let student = {
  id: 1,
  name: "Farhan",
  email: "farhan@m.com",
  marks: 40,
  full_details: function () {
    return this.id + " - " + this.name + " - " + this.email;
  },
};

let student2 = {
  id: 2,
  name: "Ahmad",
  email: "ahmad@m.com",
  marks: 50,
};
let students = [
  student,
  student2,
  { id: 3, name: "Ali", email: "ali@m.com", marks: 80 },
];

// for (let i = 0; i < students.length; i++) {
//   if (students[i].marks > 70) {
//     console.log(students[i].name + " - A+");
//   } else {
//     console.log(students[i].name + " - B");
//   }
//   //   console.log(students[i].name);
// }

students.forEach((student, index) => {
  console.log(student.name);
});

// let string = "This is my first string";

// console.log(string.split(" "));

// string = string.trim();

// // console.log(string.length);
// let str_count = 0;
// for (const ch of string) {
//   if (ch == " ") {
//     str_count++;
//   }
// }

// console.log(str_count + 1);

// let new_students = students.map((item, index) => {
//   return "Mr. " + item.name;
// });

// console.log(students);
// console.log(new_students);

// for (const index in students) {
//   console.log(index);
// }
