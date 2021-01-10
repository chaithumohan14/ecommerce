import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import { connectDb } from "./utils/connectDb.mjs";

const app = express();
dotenv.config();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3000/"],
    credentials: true,
  })
);

const main = async () => {
  try {
    await connectDb();
    app.listen(process.env.PORT, () => {
      console.log(colors.green(`> Server running on port ${process.env.PORT}`));
    });
  } catch (err) {
    console.log(err.message);
  }
};

main();
