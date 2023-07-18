// os module(operating system module is used to interact with operating system)
const { log } = require("console");
const os = require("os");

// info about a current user
//console.log(os.userInfo());

//how long the computer has been running in seconds
//console.log(os.uptime() / 60 / 60);

//comp info

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOs);
