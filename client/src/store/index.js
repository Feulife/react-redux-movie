import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice.js";
import movieReducer from "./movies/reducer.js";
import favoriteReducer from "./favorite/reducer.js";

export default configureStore({
  reducer: {
    auth: authReducer,
    movies: movieReducer,
    favorite: favoriteReducer
  },
});