const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
} = require("../server/controller/userController");
// Default Route
router.get("/", (req, res) => {
  let pageTitle = "Login Page";
  res.render("login", { pageTitle });
});

router.post("/login", loginUser);

router.get("/register", (req, res) => {
  let pageTitle = "Register Page";
  res.render("register", { pageTitle });
});

router.post("/register", registerUser);

module.exports = router;
