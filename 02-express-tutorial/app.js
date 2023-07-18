const { log } = require("console");
const http = require("http");
const { readFileSync } = require("fs");

//get all files
const home = readFileSync("./navbar-app/index.html", "utf8");
const style = readFileSync("./navbar-app/styles.css", "utf8");
const logo = readFileSync("./navbar-app/logo.svg", "utf8");
const browserApp = readFileSync("./navbar-app/browser-app.js", "utf8");

// setting server
const server = http.createServer((req, res) => {
  log(req.url);
  const url = req.url;

  // home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(home);
    res.end();
  }
  //styles
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(style);
    res.end();
  }
  //javascript file
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "application/javascript" });
    res.write(browserApp);
    res.end();
  }
  //logo
  else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(logo);
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
