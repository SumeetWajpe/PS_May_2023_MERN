import express from "express";
import jwt from "jsonwebtoken";
const app = express();
const SECRET_KEY = "SECRET_KEY";

app.use(express.json());

app.post("/login", (req, res) => {
  // get uname + pwd from req.body
  // verify if the user exists ! DB
  // sign the token (create)
  console.log(req.body);
  let payload = { name: "John Hammer", lastLogin: "Monday 25th" };
  jwt.sign(payload, SECRET_KEY, { expiresIn: "2 Days" }, (err, token) => {
    if (err) console.log(err);
    else return res.json({ token });
  });
});

app.listen(3600, () => {
  console.log("Service running @ 3600");
});
