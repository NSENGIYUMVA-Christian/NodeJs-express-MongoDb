// interacting with filesystem
const { log } = require("console");
const { readFileSync, writeFileSync, read } = require("fs");

// blocking methods readFileSync, writeFileSync

//// reading a file
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

log(first, second);

// creating a new file
writeFileSync(
  "./content/result-sync.text",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
);
