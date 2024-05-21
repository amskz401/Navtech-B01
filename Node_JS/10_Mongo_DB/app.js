const express = require("express");
require("dotenv").config();
// MDB_Connection
const mongoose = require("mongoose");

const app = express();

// parse url parameters
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connection to db
mongoose.connect(process.env.DB_URI).then(console.log("connected"));

// routes;
// app.use("/", require("./routes/crud"));

app.get("/", (req, res) => {
  const users = mongoose.model("users", {});
  users.find().then((rec) => {
    console.log(rec);
    res.send(rec);
  });
});

app.post("/add", (req, res) => {
  res.send(req.body);

  const users = mongoose.model("users", {});
  let student = req.body;
  const user = new users(student);
  user.save().then(() => console.log(user));
});

app.listen(process.env.PORT, () => {
  console.log(`Listening at: ${process.env.PORT}`);
});
