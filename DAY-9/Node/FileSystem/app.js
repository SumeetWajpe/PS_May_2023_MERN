const fs = require("fs");

// node -> callback(err,data)
fs.readFile("Input.txt", (err, dataFromFile) => {
  if (err) {
    console.log(err);
  } else {
    console.log(dataFromFile.toString());
  }
});

console.log("Program Ended !");
