let express = require("express");
let expressLayouts = require("express-ejs-layouts");

let app = express();

const PORT = 4000;

app.use(express.static("static"));

// Form Request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set layout engine
app.set(expressLayouts);
app.set("view engine", "ejs");

let students = [];

app.get("/", (req, res) => {
  // students.push(req.body);
  // res.send(students);

  res.send({ students: students });
});

app.post("/add", (req, res) => {
  students.push(req.body);
  res.send({ msg: "Added" });
});

app.put("/update", (req, res) => {
  let data = req.body;
  res.send(data);
});

app.delete("/remove", (req, res) => {
  
  res.send(data);
});

app.get("/search/:q", (req, res) => {
  let filtered = students.filter((std) => std.id == req.params.q);

  console.log(filtered);
  // res.render("home", { send: filtered });
  res.send({ students: students });
});

app.listen(PORT, () => {
  console.log(`Server started at: ${PORT}`);
});
