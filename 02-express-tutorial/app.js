const { log } = require("console");
const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  // home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Home page bro</p>");
    res.end();
  }
  //about page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About page</p>");
    res.end();
  }
  // 404 resource not found
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<p>404 resource not found</p> <a href='/'>Back home</a>");
    res.end();
  }
});

server.listen(5000, () => {
  log("server is running on port 5000");
});
