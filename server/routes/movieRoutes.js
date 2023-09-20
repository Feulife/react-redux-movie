import express from "express";
import { createMovie, deleteMovie, getMoviesByUser } from "../control/movieControl.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, createMovie);
router.get("/userMovies/:id", auth, getMoviesByUser);
router.delete("/:removeMovie", auth, deleteMovie);

export default router;