import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
  Title: String,
  imdbID: String,
  user: String,
  tag: String,
})

movieSchema.index({ tag: "text" });
const Movie = mongoose.model("Movie", movieSchema);
export default Movie;