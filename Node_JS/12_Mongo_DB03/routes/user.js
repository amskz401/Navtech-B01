const express = require("express");
const {
  getUsers,
  addUser,
  deleteUser,
  updateUser,
} = require("../server/controller/userController");

const router = express.Router();

// Get All Records
router.get("/", getUsers);

// Add New Record
router.post("/add", addUser);

// delete record
router.get("/user/:_id", deleteUser);

// Update record
router.put("/update/:_id", updateUser);

module.exports = router;

