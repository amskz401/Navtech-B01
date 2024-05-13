const express = require("express");

const app = express();

app.use(express.static("static"));

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/login", (req, res) => {
  //   res.render("static/login.html");
  // res.send("<h1>Login Page</h1>");
});

app.get("/Contact", (req, res) => {
  res.send("<h1>Contact Page</h1>");
});

app.listen(4000);
