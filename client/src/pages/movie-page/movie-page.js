import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MovieAdd } from "../../components/movie-add/movie-add.js";
import { Box, Button, CardActions, Card, CardMedia, CardContent, Typography } from "@mui/material";
import classes from './movie-page.module.css';
const API_KEY = process.env.REACT_APP_API_KEY;

export const MoviePage = () => {
  const movie = useSelector(state => state.movies.currentMovie);
  console.log(movie);
  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        (setMovieInfo(data));
      })
      .catch((error) => {
        console.error(error);
      })
  }, [movie]
  );

  if (!movie) return <h1>Not results</h1>

  return (
    <div className={classes.movie__page__content}>
      <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardMedia component="img" alt="movie poster" height="100%"
            image={movieInfo.Poster}
          >
          </CardMedia>
          <CardActions>
            <Button size="small" color="primary">
              <MovieAdd movie={movieInfo} />
            </Button>
          </CardActions>
        </Box>        
      </Card>
      <Box>
      <CardContent sx={{ display: 'flex', flexDirection: 'column',  }}>
        <Typography gutterBottom variant="h4" component="div" color="text.primary">
          {movieInfo.Title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Actors:  {movieInfo.Actors}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Genre: {movieInfo.Genre}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Year: {movieInfo.Year}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Runtime: {movieInfo.Runtime}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Plot: {movieInfo.Plot}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Rating: {movieInfo.imdbRating}
        </Typography>
        </CardContent>
      </Box>
    </div>
  )
}