import React from "react";
import classes from './items-in-favorite.module.css';

export const ItemsInFavorite = ({
  quantity = 0
}) => {
  return quantity > 0 ? (
    <div className={classes.itemsInFavorite}>{quantity}</div>
  ) : null
}