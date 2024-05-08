const http = require("http");

port = 4000;

http
  .createServer((req, res) => {
    res.write("index.html");
    res.end();
  })
  .listen(port);
