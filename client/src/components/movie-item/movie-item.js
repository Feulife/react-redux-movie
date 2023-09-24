import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentMovie } from "../../store/movies/reducer.js";
import { MovieAdd } from "../movie-add/movie-add.js";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import classes from './movie-item.module.css';

export const MovieItem = ({ movie }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log(movie);
    dispatch(setCurrentMovie(movie));
    navigate(`/app/${movie.Title}`);
  };

  return (
    <div>
      <Card sx={{ maxWidth: 345 }} >
        <CardActionArea onClick={handleClick}>
          <CardMedia component="img" alt="movie poster" height="100%"
            image={movie.Poster}>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movie.Title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <MovieAdd movie={movie} />
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}