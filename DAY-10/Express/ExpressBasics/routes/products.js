const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  let products = [
    { id: 1, title: "LED TV", price: 40000 },
    { id: 2, title: "MacBook Pro M2", price: 250000 },
  ];
  res.json(products);
});

module.exports = router;
