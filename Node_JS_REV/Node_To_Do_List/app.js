const express = require("express");
const expressLayouts = require("express-ejs-layouts");
require("dotenv").config();
const session = require("express-session");

// DB Connection
require("./server/config/db");

// Setting up application
const app = express();

// Setting up Port
const PORT = process.env.PORT || 5000;

// Setting up session
app.use(
  session({
    secret: "my_to_do_list",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

// URL Encoded Data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Load Static Files
app.use(express.static("public"));

// Setting up layouts/view engine
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layouts/main");

// is Logged in
const isLoggedIn = (req, res, next) => {
  console.log(req.session);
  if (req.session.user) next();
  else {
    res.redirect("/");
    return true;
  }
};

app.use("/", require("./routes/user"));

// List Routes
app.use("/list", isLoggedIn, require("./routes/list"));

// Server setup
app.listen(PORT, () => {
  console.log(`Server at: ${PORT}`);
});
