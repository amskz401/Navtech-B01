const mongoose = require("mongoose");

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
  createAt: {
    type: Date,
    default: Date.now(),
  },
  updateAt: {
    type: Date,
    default: Date.now(),
  },
});

let userModel = mongoose.model("users", userSchema);

module.exports = userModel;
