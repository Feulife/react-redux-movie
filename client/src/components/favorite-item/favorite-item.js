import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteMovie, deleteMovieFromFavorite } from '../../store/favorite/reducer';
import { Button, Card, CardMedia, Typography } from "@mui/material";
import classes from "./favorite-item.module.css";

export const FavoriteItem = ({ movie }) => {
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(deleteMovie(movie.imdbID))
    dispatch(deleteMovieFromFavorite(movie.imdbID))
  }
  return (
    <div className={classes.movieItem}>
      <div>
        <Card>
          <CardMedia component="img" alt="movie poster" height="100%"
            image={movie.Poster}
          >
          </CardMedia>

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
