import express, { Express, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app: Express = express();

app.use(cors<cors.CorsRequest>(), bodyParser.json());

app.options("*", cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Rootedjs");
});

const port: number = 8000;

app.listen(port, () => {
  console.log(`Server is running and rooted at http://localhost:${port}`);
});
