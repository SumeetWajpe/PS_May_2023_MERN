const express = require("express");
const router = express.Router();
let products = require("../models/products.model");

router.get("/", (req, res) => {
  res.json(products);
});

router.post("/newproduct", (req, res) => {
  let newProduct = req.body;
  // add new product
  products.push(newProduct); // db
  res.send({ msg: "New product added successfully !" });
});

router.delete("/delete/:id", (req, res) => {
  let { id } = req.params; // parameters
  //   req.query // query string
  let productList = products.filter(p => p.id !== id); // splice - index
  products = productList;
  res.send({ msg: "Product deleted successfully" });
});

module.exports = router;
