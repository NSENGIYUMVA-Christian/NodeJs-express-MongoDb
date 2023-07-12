// interacting with filesystem
const { log } = require("console");
const { readFile, writeFile } = require("fs");

// non-blocking methods readFile, writeFile
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          log(err);
          return;
        }
        log(result);
      }
    );
  });
});
