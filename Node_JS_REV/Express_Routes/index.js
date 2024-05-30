const express = require("express");

const app = express();

const PORT = 4000;

// Configure POST Route
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET Route
app.get("/:name", (req, res) => {
  res.send(`<h1>Hellow ${req.params.name}</h1>`);
});

// POST Route
app.post("/data", (req, res) => {
  console.log(req.body);
  res.send("accepted");
});

// PUT Route
app.put("/update", (req, res) => {
  console.log(req.body);
  res.send("accepted");
});

// DELETE Route
app.delete("/remove/:id", (req, res) => {
  console.log(req.params);
  console.log(req.body);
  res.send("accepted");
});

app.listen(PORT, (error) => {
  if (error) return;
  console.log(`Listening at: ${PORT}`);
});
