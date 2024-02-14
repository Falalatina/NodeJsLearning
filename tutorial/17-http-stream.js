var http = require("http");
var fs = require("fs");

http
  .createServer((req, res) => {
    // const text = fs.readFileSync("./content/big.txt", "utf-8");
    // res.end(text);
    const fileStream = fs.createReadStream("./content/big.txt", "utf-8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (error) => {
      res.end(error);
    });
  })
  .listen(5000);
