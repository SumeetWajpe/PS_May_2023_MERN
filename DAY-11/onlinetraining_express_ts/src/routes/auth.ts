import express, { Request, Response } from "express";
const router = express.Router();
import jwt from "jsonwebtoken";
router.post("/auth/login", (req: Request, res: Response) => {
  // check user in db !
  // sign()
 // console.log(req.body);
  let payload = { name: "John Hammer", lastLogin: "Monday 25th" };
  jwt.sign(
    payload,
    process.env.SECRET_KEY || "OtherSecretKey",
    { expiresIn: "2 Days" },
    (err, token) => {
      if (err) console.log(err);
      else return res.json({ token });
    },
  );
});
