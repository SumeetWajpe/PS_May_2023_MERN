import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import courseRouter from "./routes/courses.route";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/", courseRouter);

app.listen(port, () => {
  console.log(`Server running @ port ${port} !`);
});
