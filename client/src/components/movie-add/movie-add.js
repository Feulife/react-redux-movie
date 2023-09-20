import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMovie, deleteMovie, deleteMovieFromFavorite, setMovieInFavorite } from "../../store/favorite/reducer";
import { Button } from "@mui/material";
import classes from './movie-add.module.css';

export const MovieAdd = ({ movie }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({
    ...state.auth,
  }));
  const items = useSelector((state) => state.favorite.movieInFavorite);
  const isMovieInFavorite = items.some((item) => item.imdbID === movie.imdbID);
  const [addMovie] = useState({
    Title: movie.Title,
    imdbID: movie.imdbID,
    tag: `${user?.result?._id}${movie.imdbID}`,
    name: user?.result?.name
  });

  const handleClick = (e) => {
    e.stopPropagation();
    if (isMovieInFavorite) {
      console.log("Remove from state: ", movie.imdbID);
      dispatch(deleteMovieFromFavorite(movie.imdbID));
      dispatch(deleteMovie(movie.imdbID));
    } else {
      console.log("Add to state: ", addMovie);
      dispatch(createMovie(addMovie))
      dispatch(setMovieInFavorite(movie));
    }
  };

  return (
    <div className={classes.movieAdd}>
      <Button
        size="small"
        // color={isMovieInFavorite ? "secondary" : "primary"}     
        onClick={handleClick}>{isMovieInFavorite ? "Remove from my Favorite" : "Add to my Favorite"}</Button>
    </div>
  );
};