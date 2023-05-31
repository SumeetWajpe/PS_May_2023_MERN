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
        if (counter == 8) {
          e.emit("error", counter);
          clearInterval(timer);
        }
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
evt.on("error", currCount => {
  console.log("Error Occurred -> " + currCount);
});

console.log("Program Ended !");
