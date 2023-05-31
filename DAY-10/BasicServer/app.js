const http = require("http"); // built-in
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("Index.html", (err, dataFromFile) => {
      if (err) {
        console.log("Error !");
        console.log(err);
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(dataFromFile);
      }
    });
  } else if (req.url == "/script.js") {
    fs.readFile("script.js", (err, dataFromFile) => {
      if (err) {
        console.log("Error !");
        console.log(err);
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/javascript");
        res.end(dataFromFile);
      }
    });
  } else if (req.url == "/products") {
    let products = [
      { id: 1, title: "LED TV", price: 40000 },
      { id: 2, title: "MacBook Pro", price: 250000 },
    ];
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(products));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
