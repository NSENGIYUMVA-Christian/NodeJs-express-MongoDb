const { log } = require("console");
const { readFile, writeFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      // handle error
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// getText("./content/first.txt")
//   .then((res) => log(res))
//   .catch((err) => log(err));

const start = async () => {
  try {
    const first = await getText("./content/first.txt");
    const second = await getText("./content/second.txt");

    log(first);
    log(second);
  } catch (error) {
    log(error);
  }
};

start();
