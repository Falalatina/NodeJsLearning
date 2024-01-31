const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data recieved usa ${name}, ${id} `);
});
customEmitter.on("response", () => {
  console.log(`data recieved also here  `);
});

customEmitter.emit("response", "john", 35);
