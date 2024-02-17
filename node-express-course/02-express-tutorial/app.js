const express = require("express");

const app = express();

//methods to remind :>

//app.get -read -user
//app.post -insert -user
//app.put -update  -user
//app.delete -delete -user
//app.all
//app.use -res eg. 404
//app.listen

app.get("/", (req, res) => {
  res.send("HOM");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.all("*", (req, res) => {
  res.send("<h1>resource not found </h1>");
});

app.listen(5000, () => {
  console.log("serv is listening on 5000");
});
