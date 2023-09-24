import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setCurrentMovie } from "../../store/movies/reducer.js";
import { deleteMovie, deleteMovieFromFavorite } from '../../store/favorite/reducer';
import { Button, Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import classes from "./favorite-item.module.css";

export const FavoriteItem = ({ movie }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDeleteClick = () => {
    dispatch(deleteMovie(movie.imdbID))
    dispatch(deleteMovieFromFavorite(movie.imdbID))
  }

  const handleClick = () => {
    console.log(movie);
    dispatch(setCurrentMovie(movie));
    navigate(`/app/${movie.Title}`);
  };

  return (
    <div className={classes.movieItem}>
      <div>
        <Card>
          <CardActionArea onClick={handleClick}>
            <CardMedia component="img" alt="movie poster" height="100%"
              image={movie.Poster}
            >
            </CardMedia>
          </CardActionArea>
        </Card>
        <div>
          <Typography gutterBottom variant="h5" component="div" color="text.secondary">
            {movie.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.Year}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.Type}
          </Typography>
        </div>
        <Button onClick={handleDeleteClick}>
          <i className='material-icons favorite-delete'>Delete from favorite</i>
        </Button>
      </div>
    </div>
  )
}
