const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const {
  allTasks,
  addTask,
  changeStatus,
  toCompleted,
  toDeleted,
} = require("../server/controller/taskListController");

// List Routing
router.get("/", allTasks);

// Add Task
router.post("/add-task", addTask);

// To Progress
router.get("/in-progress/:_id", changeStatus);

// To Complete
router.get("/completed/:_id", toCompleted);

// To Delete
router.get("/deleted/:_id", toDeleted);

module.exports = router;
