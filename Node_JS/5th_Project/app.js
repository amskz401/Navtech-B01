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

app.get("/", (req, res) => {
  let students = [
    { id: 1, name: "Farhan" },
    { id: 2, name: "Ahmad" },
  ];
  res.render("home", { send: students });
});

app.get("/search/:q", (req, res) => {
  let students = [
    { id: 1, name: "Farhan" },
    { id: 2, name: "Ahmad" },
    { id: 3, name: "Ahmad" },
  ];

  let filtered = students.filter((std) => std.id == req.params.q);

  console.log(filtered);
  res.render("home", { send: filtered });
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
