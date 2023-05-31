// Non -blocking approach
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

// Blocking approach

// const fs = require("fs");

// console.log("Program Started..");

// let content = fs.readFileSync("Input.txt");

// console.log(content.toString());

// console.log("Program Ended !");
