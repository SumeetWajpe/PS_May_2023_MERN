const fs = require("fs");

let readableStream = fs.createReadStream("Input.txt", "utf-8");

readableStream.on("data", chunk => {
  console.log("\r\n>>>>>>>>>>>>>>>>>>>>> CHUNK >>>>>>>>>>>>>>>>>>>>>>>> \r\n");
  console.log(chunk);
});

readableStream.on("close", () => {
  console.log("Connection closed !");
});

console.log("Program Ended");
