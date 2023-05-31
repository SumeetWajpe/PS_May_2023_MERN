const fs = require("fs");

let readableStream = fs.createReadStream("Input.txt");

readableStream.on("data", chunk => {
  console.log("\r\n>>>>>>>>>>>>>>>>>>>>> CHUNK >>>>>>>>>>>>>>>>>>>>>>>> \r\n");
  console.log(chunk.toString());
});

readableStream.on("close", () => {
  console.log("Connection closed !");
});

console.log("Program Ended");
