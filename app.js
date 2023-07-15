const { log } = require("console");
const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt");

stream.on("data", (result) => {
  log(result);
});
