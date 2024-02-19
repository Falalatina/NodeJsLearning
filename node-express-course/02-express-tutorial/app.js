const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json([{ name: "john" }, { name: "susan" }]);
});

app.all("*", (req, res) => {
  res.status(404).send("404 not found");
});

app.listen(5000, () => {
  console.log("serv is listening ");
});
