var express = require("express");
const fs = require("fs");
var router = express.Router();
let course = {
  title: "React",
  price: 5000,
  introVideo: "./videos/React.mp4",
};
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { course });

  // let courses = [
  //   { id: 1, title: "React", price: 3000 },
  //   { id: 2, title: "Redux", price: 4000 },
  // ];

  // res.render("index", { courses });
});

router.get("/video", (req, res) => {
  let videoPath = course.introVideo;
  const range = req.headers.range;
  const CHUNK_SIZE = 10 ** 6; // 1MB
  const videoSize = fs.statSync(videoPath).size;
  console.log(range);
  // range
  const start = Number(range.replace(/\D/g, "")); // start = 0
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

  const contentLength = end - start + 1;
  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Type": "video/mp4",
    "Content-Length": contentLength,
  };
  // reading the video file
  const videoStream = fs.createReadStream(videoPath, { start, end });
  res.writeHead(206, headers);
  videoStream.pipe(res);
});

module.exports = router;
