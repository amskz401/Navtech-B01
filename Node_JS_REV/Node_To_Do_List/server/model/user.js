const mongoose = require("mongoose");

const listSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: String,
});

module.exports = mongoose.model("users", listSchema);
