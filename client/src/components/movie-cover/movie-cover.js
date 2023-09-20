import React from "react";
import classes from './movie-cover.module.css';

export const MovieCover = ({ image = '' }) => {
  return (
    <div className={classes.movieCover} style={{ backgroundImage: `url(${image})` }} />
  )
}