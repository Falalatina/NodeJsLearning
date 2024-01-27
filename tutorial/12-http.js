const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  }
  if (req.url === "/about") {
    res.end("Get to know som info bout us");
  }
  return res.end(`
  <h1> Oops!</h1>
  <p>We can't seem find page you are looking for :( </p>
  <a href="/">Bact to the homepage</a>`);
});

server.listen(5000);

//dziala ale tylko jednorazowo chce throw er
