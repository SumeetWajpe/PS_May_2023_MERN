import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import courseRouter from "./routes/courses.route";
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use("/", courseRouter);

app.listen(port, () => {
  console.log(`Server running @ port ${port} !`);
});
