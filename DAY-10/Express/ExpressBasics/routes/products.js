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

module.exports = router;
