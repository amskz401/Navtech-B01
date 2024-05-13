const fs = require("fs");

// fs.writeFileSync("a.txt", "this is my first file in node js");

let mFile = fs.readFileSync("a.txt");

console.log(mFile.toString());
