const express = require("express");
const studentRoutes = require("./routes/student");
const app = express();

app.set("view engine", "ejs");

app.use(express.json());

app.use("/", studentRoutes);

app.listen(4000, () => {
  console.log("Server Started");
});
