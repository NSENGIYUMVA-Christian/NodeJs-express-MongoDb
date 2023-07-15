const { log } = require("console");
const EventEmitter = require("events");
const customEmitter = new EventEmitter();

customEmitter.on("response", () => {
  log(`Data received`);
});

customEmitter.emit("response");
