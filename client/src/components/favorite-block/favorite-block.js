import React from "react";
import { useSelector } from "react-redux";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ItemsInFavorite } from "../items-in-favorite/items-in-favorite";
import classes from './favorite-block.module.css';
import { Link } from "react-router-dom";

export const FavoriteBlock = () => {
  const items = useSelector((state) => state.favorite.movieInFavorite);  

  return (
    <div className={classes.favoriteBlock}>
      <ItemsInFavorite quantity={items.length} />      
      <FavoriteBorderIcon>
        <Link to="/Favorite" />
      </FavoriteBorderIcon>
    </div>
  );
};