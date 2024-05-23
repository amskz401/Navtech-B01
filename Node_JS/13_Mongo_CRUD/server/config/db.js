const mongoose = require("mongoose");

// Db Connection
try {
  mongoose.connect(process.env.DB_URI).then(() => {
    console.log("DB Connected");
  });
} catch (error) {
  console.log(error);
}
