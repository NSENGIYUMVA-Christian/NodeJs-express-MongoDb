const { log } = require("console");
const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});

stream.on("data", (result) => {
  log(result);
});

stream.on("data", (error) => {
  log(error);
});
