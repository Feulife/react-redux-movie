import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteAllMoviesFromFavorite } from "../../store/favorite/reducer.js";
import { setLogout } from "../../store/auth/authSlice";
import { Link } from "react-router-dom";
import { FavoriteBlock } from "../favorite-block/favorite-block";
import classes from './header.module.css';
import Toolbar from '@mui/material/Toolbar';
import { Container, Button, Box, Typography, IconButton } from '@mui/material';


export const Header = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(deleteAllMoviesFromFavorite());
    dispatch(setLogout());
  };
  const { user } = useSelector((state) => ({ ...state.auth }));

  return (
    <Box sx={{ flexGrow: 5 }} classes={{ root: classes.root }} position="static">
      <Container classes={{ root: classes.container }}>
        <div>
          <Link to="/" className={classes.headerAppTitle}>
            <h3 className={classes.movieTitle}>Movie App</h3>
          </Link>
        </div>
        <Toolbar className={classes.headerAppTitle}>
          <div show={show}>
            {user?.result?._id && (
              <h5 style={{
                marginRight: '1vw',
                color: "mediumorchid"
              }}>
                Logged: {user?.result?.name}
              </h5>
            )}
          </div>
          <div>
            {user?.result?._id ? (
              <Link to="/" className={classes.headerAppTitle}>
                <p onClick={handleLogout}>Logout</p>
              </Link>
            ) : (
              <Link to="/Login" className={classes.headerAppTitle}>
                <p>Login</p>
              </Link>
            )}
          </div>
        </Toolbar>
        <div className={classes.rightSide}>
          <div className={classes.headerAppTitle}>
          {user?.result?._id ? (
              <Link to="/Favorite" className={classes.headerAppTitle}>
                <FavoriteBlock />
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>
      </Container>
    </Box>
  );
};
