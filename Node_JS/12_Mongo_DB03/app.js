const express = require("express");
require("dotenv").config();
require("./server/config/db");
const expressLayouts = require("express-ejs-layouts");

const app = express();

// Encode URL Params
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting Up Layouts
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("layout", "./layout");

const PORT = process.env.PORT || 5000;

// User Routes
app.use("/", require("./routes/user"));

app.listen(PORT, () => {
  console.log(`Listening at: ${PORT}`);
});
