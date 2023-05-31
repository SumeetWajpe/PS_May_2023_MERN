// Publisher

const EventEmitter = require("events").EventEmitter;
function GetCount(maxIteration) {
  // return a EventEmitter
  let e = new EventEmitter();
  // logic

  setTimeout(() => {
    e.emit("start");
  }, 2000);
  return e;
}

//// =======================
// Subscriber
let evt = GetCount();
evt.on("start", () => {
  console.log("Started..");
});

console.log("Program Ended !");
