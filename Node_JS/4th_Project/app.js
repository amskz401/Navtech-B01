let express = require("express");

let app = express();

const PORT = 4000;

app.use(express.static("static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  let students = [
    { id: 1, name: "Farhan" },
    { id: 2, name: "Ahmad" },
  ];
  res.send(students);
});

app.post("/add", (req, res) => {
  let data = req.body;
  res.send(data);
});

app.put("/update", (req, res) => {
  let data = req.body;
  res.send(data);
});

app.delete("/remove", (req, res) => {
  let data = req.body;
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Server started at: ${PORT}`);
});
