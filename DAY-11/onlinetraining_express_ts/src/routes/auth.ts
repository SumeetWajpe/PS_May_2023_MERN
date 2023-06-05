import express, { Request, Response } from "express";
const router = express.Router();
import jwt from "jsonwebtoken";
router.post("/login", (req: Request, res: Response) => {
  // check user in db !
  // sign()
  // console.log(req.body);
  let user = req.body;
  console.log(user);
  if (user.name == "john") {
    // db
    let payload = { name: user.name, lastLogin: "Monday 25th" };
    jwt.sign(
      payload,
      process.env.SECRET_KEY || "OtherSecretKey",
      { expiresIn: "2 Days" },
      (err, token) => {
        if (err) console.log(err);
        else return res.json({ token, status: true });
      },
    );
  }
});

export default router;
