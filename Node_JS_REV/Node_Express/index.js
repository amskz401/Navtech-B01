const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/html", (req, res) => {
  res.send("html");
});

app.get("/css", (req, res) => {
  res.send("css");
});

app.get("/js", (req, res) => {
  res.send("javascript");
});

app.listen(PORT, () => {
  console.log(`Server started at: ${PORT}`);
});
