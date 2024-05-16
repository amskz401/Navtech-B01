const express = require("express");
const cors = require("cors");
const app = express();

// for sharing data
app.use(cors());

// assign port
const PORT = 4000;

app.get("/", (req, res) => {
  let products = [
    { id: 1, name: "Laptop", price: 200 },
    { id: 1, name: "Mouse", price: 50 },
    { id: 1, name: "Kyeboard", price: 70 },
  ];

  res.send({ products: products });
});

// Creating Server
app.listen(PORT, (err) => {
  if (err) return;
  console.log(`Server started at: ${PORT}`);
});
