import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 3500;

app.get("/", (req: Request, res: Response) => {
  res.send({ msg: "Using Typescript with Express !" });
});

app.listen(port, () => {
  console.log(`Server running @ port ${port} !`);
});
