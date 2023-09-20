import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FavoriteItem } from "../../components/favorite-item/favorite-item.js";
import classes from './favorite-page.module.css';

export const FavoritePage = () => {
  const items = useSelector((state) => state.favorite.movieInFavorite);
  const dispatch = useDispatch();

  if (items.length < 1) {
    return <h1>Your favorite list is empty!</h1>
  }

  return (
    <div className={classes.favoritePage}>
      <div>
        <h3 style={{
          marginRight: "30px",
          color: "mediumorchid"
        }}
        >
          Your favorite list
        </h3>
      </div>
      <div className={classes.movies}>
        {items.map(movie => <FavoriteItem
          key={movie.imdbID}
          movie={movie}
        />)}
      </div>
    </div>
  )
}