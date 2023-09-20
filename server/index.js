import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import movieRoutes from "./routes/movieRoutes.js";
import userRoutes from "./routes/userRoutes.js";
dotenv.config({ path: "./.env" });
const Db = process.env.ATLAS_URI;
const PORT = process.env.PORT;

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/movies", movieRoutes);
app.use("/users", userRoutes);

mongoose.connect(Db, {
  useNewURlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });