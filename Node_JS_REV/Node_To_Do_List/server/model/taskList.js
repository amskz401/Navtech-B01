const mongoose = require("mongoose");

const listSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  priority: String,
  status: String,
  user_id: String
});

module.exports = mongoose.model("task_list", listSchema);
