const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  let student = {
    id: 1,
    name: "Farhan",
  };
  res.send(student);
});

router.post("/add", (req, res) => {
  
  res.send(student);
});

router.put("/update", (req, res) => {
  
  res.send(student);
});

router.delete("/remove", (req, res) => {
  
  res.send(student);
});

module.exports = router;
