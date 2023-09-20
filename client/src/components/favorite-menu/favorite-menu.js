import React from "react";
import { useSelector } from "react-redux";
import { FavoriteItem } from "../favorite-item/favorite-item.js";
import classes from "./favorite-menu.module.css";

export const FavoriteMenu = () => {
  const items = useSelector((state) => state.favorite.movieInFavorite);

  return (
    <div className={classes.favoriteMenu}>
      <div>
        {items.length > 0
          ? items.map((movie) => (
            <FavoriteItem
              key={movie.imdbID}
              movie={movie}
            />
          ))
          : "Favorite is empty"}
      </div>
    </div>
  );
};
