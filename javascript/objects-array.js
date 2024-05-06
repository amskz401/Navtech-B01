let student = {
  id: 1,
  name: "Farhan",
  email: "farhan@m.com",
  full_details: function () {
    return this.id + " - " + this.name + " - " + this.email;
  },
};

let student2 = {
  id: 2,
  name: "Ahmad",
  email: "ahmad@m.com",
};

// console.log(student.full_details());

let students = [student, student2, { id: 3, name: "Ali", email: "ali@m.com" }];

// console.log(students[2].name);
