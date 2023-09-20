import mongoose from "mongoose";
import MovieModel from "../models/movieModels.js";

export const createMovie = async (req, res) => {
  const movie = req.body;
  console.log({ movie })
  const newMovie = new MovieModel({
    ...movie,
    user: req.userId,
  });
  try {
    await newMovie.save();
    console.log("new: ", newMovie);
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" })
  }
}

export const getMoviesByUser = async (req, res) => {
  const { id } = req.params;
  console.log("All movies from db: ", id);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "User doesn't exist" });
  }
  const userMovies = await MovieModel.find({ user: id });
  res.status(200).json(userMovies);
};

export const deleteMovie = async (req, res) => {
  const { removeMovie } = req.params;
  try {
    console.log("Remove movie: ", { removeMovie });
    await MovieModel.findOneAndDelete({ "tag": `${req.userId}${removeMovie}` });
    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
}
