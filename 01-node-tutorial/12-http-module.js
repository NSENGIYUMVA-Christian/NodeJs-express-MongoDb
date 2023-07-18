const { log } = require("console");
const http = require("http");

const server = http.createServer((req, res) => {
  // homepage
  if (req.url === "/") {
    res.end("Welcome to homepage");
    return;
  }
  //about
  if (req.url === "/about") {
    res.end("Welcome to about");
    return;
  }

  // wrong request
  res.end(`<h1>Oops!<h1/>
   <p>Wrong page </p>
   <a href="/" >Back home<a>
   `);
});

server.listen(5000);
