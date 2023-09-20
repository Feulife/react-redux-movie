import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovieInFavorite } from "../../store/favorite/reducer.js";
import { MovieItem } from "../../components/movie-item/movie-item.js";
import { Controls } from "../../components/controls/controls.js";
import { getMoviesByUser } from "../../store/favorite/reducer.js";
import classes from './Main.module.css';
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

export const Main = () => {
  const [moviesSearch, setMoviesSearch] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => ({ ...state.auth.user }));
  const { userMovies } = useSelector((state) => ({ ...state.favorite }));
  const userId = user?.result?._id;
  const movieInFavorite = useSelector((state) => state.favorite.movieInFavorite)

  const searchMovies = (str, type = "all") => {
    console.log(str);
    fetch(
      `https://www.omdbapi.com/?apikey=63be4592&s=${str}${type !== "all" ? `&type=${type}` : ""}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMoviesSearch(data.Search);
        console.log(data.Search);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  useEffect(() => {
    if (userId) {
      dispatch(getMoviesByUser(userId));
    }
  }, [userId]);

  useEffect(() => {
    userMovies.map((item) => item.imdbID === movieInFavorite.imdbID ? console.log("Not necessery to add this Movie : " `${item.Title}`)
      : fetch(
        `https://www.omdbapi.com/?apikey=63be4592&i=${item.imdbID}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          dispatch(setMovieInFavorite(data));
        })
        .catch((error) => {
          console.error(error);
        }));
  }, [userMovies]);

  return (
    <>
      <div className={classes.main__page}>
        <Controls onSearch={searchMovies} />
        <div className={classes.movies}>
          {
            moviesSearch?.map((movie) => (
              <MovieItem key={movie.imdbID} movie={movie} />
            ))
          }
        </div>
      </div>
      <div>
      </div>
    </>
  )
}
