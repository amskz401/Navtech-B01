let express = require("express");
let expressLayouts = require("express-ejs-layouts");
let session = require("express-session");

let app = express();

const PORT = 4000;

// load session
app.use(
  session({
    secret: "Auth Session",
    cookie: {
      maxAge: 60000,
    },
  })
);

// for static files
app.use(express.static("static"));

// Form Request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set layout engine
app.set(expressLayouts);
app.set("view engine", "ejs");

// express sessions

app.use((req, res, next) => {
  let inSess = 0;
  if (req.session.value) {
    inSess = req.session.value;
  }
  app.locals.user = "Farhan";
  app.locals.inSess = inSess;
  next();
});

let students = [];

app.get("/", (req, res) => {
  // students.push(req.body);
  // res.send(students);
  res.render("home", { send: [] });
  // res.send({ students: students });
});

app.get("/set-sess", (req, res) => {
  if (req.session.value) {
    req.session.value++;
  } else {
    req.session.value = 1;
  }

  res.send("session updated: " + req.session.value);
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
