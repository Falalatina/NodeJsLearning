const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/", (req, res) => {
  res
    .status(200)
    .send("<h1>Home Page</h1> <a href='/api/products'>products</a>");
});

app.all("*", (req, res) => {
  res.status(404).send("404 not found");
});

app.listen(5000, () => {
  console.log("serv is listening ");
});
