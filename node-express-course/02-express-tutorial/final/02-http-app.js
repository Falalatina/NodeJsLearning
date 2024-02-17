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
