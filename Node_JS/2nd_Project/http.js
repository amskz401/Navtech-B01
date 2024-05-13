const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    if (req.url == "/") {
      let mFile = fs.readFileSync("static/home.html");

      res.write(mFile);
      res.end();
    } else if (req.url == "/login") {
      let mFile = fs.readFileSync("login.html");

      res.write(mFile);
      res.end();
    } else if (req.url == "/about") {
      res.write("<h1>About Page</h1>");
      res.end();
    } else {
      res.write("<h1>Not Found</h1>");
      res.end();
    }
  })
  .listen(4000);
