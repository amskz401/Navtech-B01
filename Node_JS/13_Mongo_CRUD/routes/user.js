const express = require("express");
const {
  getUsers,
  addUser,
  deleteUser,
  updateUser,
  findRecord,
} = require("../server/controller/userController");

const router = express.Router();

// Get All Records
router.get("/:limit/:skip", getUsers);

// Find Record
router.get("/find/:_id", findRecord);

// Add New Record
router.post("/add", addUser);

// delete record
router.delete("/user/:_id", deleteUser);

// Update record
router.put("/update/:_id", updateUser);

module.exports = router;
