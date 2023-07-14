const { log } = require("console");
const http = require("http");

const server = http.createServer((req, res) => {
  // home
  if (req.url === "/") {
    res.end("home page");
    return;
  }
  // about
  if (req.url === "/about") {
    //blocking code
    for (let i = 0; i < 200; i++) {
      for (let j = 0; j < 1000; j++) {
        log(`${i} and ${j}`);
      }
    }
    res.end("about page");
    return;
  }
  //error
  res.end("error page");
});

server.listen(5000, () => {
  log("listening to port 500");
});
