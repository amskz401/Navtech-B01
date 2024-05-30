const http = require("http");

http
  .createServer((req, res) => {
    if (req.url == "/html") {
      res.write("html");
    } else if (req.url == "/css") {
      res.write("css");
    } else if (req.url == "/js") {
      res.write("javascript");
    }
    res.end();
    // routes
  })
  .listen(4000);
