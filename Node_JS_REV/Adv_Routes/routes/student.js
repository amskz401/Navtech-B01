const express = require("express");
const router = express.Router();

// Get Route
router.get("/:age", (req, res) => {
  console.log(1);
  res.render("home", { title: "Home Page" });
});

// Get Route
router.get("/profile/:age", (req, res) => {
  res.render("profile", { title: "Profile Page" });
});

// Get Route
// router.get("/:name", (req, res) => {
//   console.log(req.params);
//   res.send("Welcome " + req.params.name);
// });

// Get Route
// router.get("/:name/:id", (req, res) => {
//   const students = [
//     { id: 13, name: "Farhan" },
//     { id: 15, name: "Ali" },
//     { id: 12, name: "Qaiser" },
//   ];

//   let student = students.find((student) => student.id == req.params.id);
//   student = JSON.stringify(student);
//   res.send("Welcome " + student);
// });

module.exports = router;
