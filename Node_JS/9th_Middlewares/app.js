// types of middelwares (app, group, route)

const express = require("express");

const app = express();

const router = express.Router();

const port = 4000;

app.use(express.urlencoded({ extended: true }));

// group router
app.use("/", router);

let checkAge = (req, res, next) => {
  console.log("in middelware");
  next();
  //   if (req.params.age < 18) {
  //     res.send("You are not eligible");
  //   } else {
  //     next();
  //   }
};

// global level middelware
// app.use(checkAge);

// Route Level
// apply only on single route

// Group Level
// apply on multiple routes at a time

app.get("/", (req, res) => {
  res.send("home page route");
});

router.get("/contact", checkAge, (req, res) => {
  res.send("contact page route");
});

router.get("/about", checkAge, (req, res) => {
  res.send("contact page route");
});

router.get("/page", checkAge, (req, res) => {
  res.send("contact page route");
});

app.listen(port, () => {
  console.log(`Server at: ${port}`);
});
