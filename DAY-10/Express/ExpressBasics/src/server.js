const express = require("express");

const app = express();
const port = 3000;

const productsRouter = require("../routes/products");

// Express middleware
app.use(express.static("src/static"));
app.use(express.json()); // read json from req payload & populate req.body

// app.get("/", (req, res) => {
//   //   res.send({ msg: "Hello World!" });
//   //   res.json({ msg: "JSON DATA !" });
//   res.sendFile("Index.html", { root: __dirname });
// });
app.use("/products", productsRouter);

// app.get("/script.js", (req, res) => {
//   console.log(__dirname);
//   res.sendFile("script.js", { root: __dirname + "/static" });
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
