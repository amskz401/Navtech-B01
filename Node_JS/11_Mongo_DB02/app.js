const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

// Db Connection
mongoose.connect(process.env.DB_URI).then(() => {
  console.log("DB Connected");
});

// User Schema
let userSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: String,
  email: String,
  phone: String,
  gender: String,
});
let userModel = mongoose.model("users", {});

const app = express();

// Encode URL Params
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  userModel
    .find()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

// Add New Record
app.post("/add", (req, res) => {

  let newUser = userModel(req.body);
  newUser.save().then((insertedRec, error) => {
    res.send(insertedRec);
  });
});

// delete record
app.delete("/user/:_id", (req, res) => {
  userModel.deleteOne(req.params).then((result) => {
    res.send(result);
  });
});

app.put("/update/:_id", (req, res) => {
  userModel.updateOne(req.params, { $set: req.body }).then((rec) => {
    res.send(rec);
  });
});

app.listen(PORT, () => {
  console.log(`Listening at: ${PORT}`);
});
