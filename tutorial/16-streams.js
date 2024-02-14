///streams

const { error } = require("console");
const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 9000,
  encoding: "utf-8",
});

stream.on("data", (res) => {
  console.log(res);
});

stream.on("error", (res) => {
  console.log(error);
});
