import React from "react";
import { useSelector } from "react-redux";
import { MovieAdd } from "../../components/movie-add/movie-add.js";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import classes from './movie-page.module.css';

export const MoviePage = () => {
  const movie = useSelector(state => state.movies.currentMovie);
  console.log(movie);

  if (!movie) return <h1>Not results</h1>
  return (
     <div className={classes.movie__page__content}>
      <div>
        <Card>
          <CardMedia component="img" alt="movie poster" height="100%"
        image={movie.Poster}
        >
          </CardMedia>
          <CardActions>
            <Button size="small" color="primary">
              <MovieAdd movie={movie} />
            </Button>
          </CardActions>
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
      </div>     
    </div>
  )
}