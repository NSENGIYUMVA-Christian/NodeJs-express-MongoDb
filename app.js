const { log } = require("console");
const EventEmitter = require("events");
const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  log(`Data received ${name} with id of ${id}`);
});

customEmitter.on("response", () => {
  log(`Some other logic here`);
});

customEmitter.emit("response", "Chris", "0");
