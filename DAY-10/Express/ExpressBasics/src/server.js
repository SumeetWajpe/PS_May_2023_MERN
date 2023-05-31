const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //   res.send({ msg: "Hello World!" });
  //   res.json({ msg: "JSON DATA !" });
  res.sendFile("Index.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
