const express = require("express");

const app = express();

const port = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>This is get first route</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>This is about route</h1>");
});

app.get("/about/team", (req, res) => {
  res.send("<h1>This is about teacm route</h1>");
});

app.get("/abc.xyz", (req, res) => {
  res.send("<h1>This is abc.xyz route</h1>");
});

app.get("/ab?cd", (req, res) => {
  res.send("<h1>This is ab?cd route</h1>");
});

let checkAge = (req, res, next) => {
  if (req.params.age > 18) {
    next();
  } else {
    res.send("You are not allowed");
  }
};

app.get("/user/:id/:name", [chkLogin, checkAge], (req, res) => {
  let userid = 0;
  res.send(`<h1>User: ${req.params.id} - ${req.params.name}</h1>`);
});

function chkLogin(req, res, next) {
  let login = true;
  if (login) {
    next();
  } else {
    res.send(`<h1>Invalid user found</h1>`);
    return false;
  }
}

app.listen(port, (error) => {
  console.log(`Server at: ${port}`);
});
