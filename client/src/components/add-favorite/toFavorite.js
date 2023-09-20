import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMovie } from "../../store/favorite/reducer.js";
import { Button } from "@mui/material";
import { deleteMovieFromFavorite, setMovieInFavorite } from "../../store/favorite/reducer";

export const toFavorite = ({ movie }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.favorite.movieInFavorite);
  const isMovieInFavorite = items.some((item) => item.imdbID === movie.imdbID);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isMovieInFavorite) {
      dispatch(deleteMovieFromFavorite(movie.imdbID));
    } else {
      dispatch(createMovie(movie.imdbID));
      dispatch(setMovieInFavorite(movie));
    }
  };

  return (
    <Button
      // variant={isMovieInFavorite ? "secondary" : "success"}
      onClick={handleClick}
    >
      {isMovieInFavorite ? "Remove from favorite" : "Add to favorite"}
    </Button>
  )
}
