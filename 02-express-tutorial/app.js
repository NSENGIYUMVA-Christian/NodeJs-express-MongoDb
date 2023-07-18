const { log } = require("console");
const http = require("http");

const server = http.createServer((req, res) => {
  // providing meta data about our response
  res.writeHead(200, { "content-type": "text/html" });
  // body
  res.write("<h1>Home page bro</p>");
  // explicity end request
  res.end();
});

server.listen(5000, () => {
  log("server is running on port 5000");
});
