const fs = require("fs");

let readableStream = fs.createReadStream("Input.txt", "utf-8"); // provided the encoding
let writableStream = fs.createWriteStream("Output.txt", "utf-8");

let dataToBewritten = "";
readableStream.on("data", chunk => {
  // console.log("\r\n>>>>>>>>>>>>>>>>>>>>> CHUNK >>>>>>>>>>>>>>>>>>>>>>>> \r\n");
  dataToBewritten += chunk;
});

readableStream.on("end", () => {
  writableStream.write(dataToBewritten);
  writableStream.end();
});

console.log("Program Ended");
