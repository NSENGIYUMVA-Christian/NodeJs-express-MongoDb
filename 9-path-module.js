// path module is used to select any file's path anywhere

const { log } = require("console");
const path = require("path");

// path separator
//console.log(path.sep);

// joining paths
const filePath = path.join("/content", "subfolder", "test.txt");
//console.log(filePath);

// getting the base name
const base = path.basename(filePath);
//console.log(base);

// getting an absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");

console.log("The abso == ", absolute, " end");
