import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
// import cors from "cors";
import corsMiddleware from "./middleware/cors.js";
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
app.use(corsMiddleware)

// app.use(cors());
// app.use(cors({ origin: ['*', 'https://moviemongo.vercel.app', 'https://vercel.com/feulife/moviemongo/a42a84aAbRoJsrcyXsNfCXdfhG6U', 'https://react-redux-movie-teal.vercel.app', 'https://vercel.com/feulife/react-redux-movie/FxmZzCSrPFyeqXc1yZ2d5YLcB5BR'] }));

// app.use("/api/movies", movieRoutes);
// app.use("/api/users", userRoutes);
app.use("/movies", movieRoutes);
app.use("/users", userRoutes);
const start = async () => {
  try {
    await mongoose.connect(Db, {
      useNewURlParser: true,
      useUnifiedTopology: true,
    })
    app.listen(PORT, () => {
      console.log(`Server Running on port : ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  };
}

start();

// mongoose.connect(Db, {
//   useNewURlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`Server Running on port : ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });