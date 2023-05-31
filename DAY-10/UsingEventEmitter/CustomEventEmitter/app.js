// Publisher

const EventEmitter = require("events").EventEmitter;
function GetCount(maxIteration) {
  // return a EventEmitter
  let e = new EventEmitter();
  // logic

  process.nextTick(() => {
    e.emit("start");
    let counter = 0;
    let timer = setInterval(() => {
      if (counter < maxIteration) {
        e.emit("data", counter++);
      } else if (counter == maxIteration) {
        clearInterval(timer);
      }
    }, 500);
  });
  return e;
}

//// =======================
// Subscriber
let evt = GetCount(10);
evt.on("start", () => {
  console.log("Started..");
});
evt.on("data", currCount => {
  console.log("Received Data -> " + currCount);
});

console.log("Program Ended !");
