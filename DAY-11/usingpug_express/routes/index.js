var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  // let course = { name: "React", price: 5000 };
  // res.render("index", { course });

  let courses = [
    { id: 1, title: "React", price: 3000 },
    { id: 2, title: "Redux", price: 4000 },
  ];

  res.render("index", { courses });
});

module.exports = router;
