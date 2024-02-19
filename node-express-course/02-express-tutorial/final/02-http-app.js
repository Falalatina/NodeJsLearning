const http = require("http");
const { readFileSync } = require("fs");

// get a file
const navbar = readFileSync("./navbar-app/index.html");
const styles = readFileSync("./navbar-app/styles.css");
const img = readFileSync("./navbar-app/logo.svg");
const logic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  //console.log(req.method);
  const url = req.url;
  //home P
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(navbar);
    res.end();
    //bout
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about</h1>");
    res.end();
  }
  //styles
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(styles);
    res.end();
  }
  //img
  else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(img);
    res.end();
  }
  //logic
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(logic);
    res.end();
  }
  //404
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found 404</h1>");
    res.end();
  }
});

server.listen(5000);

// const express = require("express");

// const app = express();

// //methods to remind :>

// //app.get -read -user
// //app.post -insert -user
// //app.put -update  -user
// //app.delete -delete -user
// //app.all
// //app.use -res eg. 404
// //app.listen

// app.get("/", (req, res) => {
//   res.status(200).send("HOM");
// });

// app.get("/about", (req, res) => {
//   res.status(200).send("about");
// });

// app.all("*", (req, res) => {
//   res.status(404).send("<h1>resource not found </h1>");
// });

// app.listen(5000, () => {
//   console.log("serv is listening on 5000");
// });
