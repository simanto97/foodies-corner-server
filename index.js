const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

const chefs = require("./data/chefsdata.json");
const customers = require("./data/customers.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("server is running");
});
app.get("/chefs", (req, res) => {
  res.send(chefs);
});
app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  const selectedChef = chefs.find((n) => n.id === parseInt(id));
  res.send(selectedChef);
});

app.get("/customers", (req, res) => {
  res.send(customers);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
