import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../api/api.js";

export const createMovie = createAsyncThunk('movies/createMovie', async (addItem, { rejectWithValue }) => {
  try {
    const response = await api.createMovie(addItem);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data)
  }
});

export const deleteMovie = createAsyncThunk(
  'movies/deleteMovie', async (removeMovie, { rejectWithValue }) => {
    try {
      const response = await api.deleteMovie(removeMovie);
      console.log(removeMovie);
      console.log("respons data", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
);

export const getMoviesByUser = createAsyncThunk(
  "movies/getMoviesByUser", async (userId, { rejectWithValue }) => {
    try {
      const response = await api.getMoviesByUser(userId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    addMovie: {},
    movieInFavorite: [],
    movies: [],
    userMovies: [],
    delMovie: {},
    error: false,
    loading: false,
    message: "",
  },

  reducers: {
    setMovieInFavorite: (state, action) => {
      state.movieInFavorite.push(action.payload);
    },
    deleteMovieFromFavorite: (state, action) => {
      state.movieInFavorite = state.movieInFavorite.filter(
        (movie) => movie.imdbID !== action.payload
      );
    },
    deleteAllMoviesFromFavorite: (state, action) => {
      state.movieInFavorite = [];
      state.userMovies = [];
    },
    setMovies: (state) => {
      state.movies = [];
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(createMovie.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.addMovie = action.payload;
      })
      .addCase(createMovie.rejected, (state, action) => {
        state.error = true;
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(deleteMovie.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteMovie.fulfilled, (state, action) => {
        state.loading = false;
        const {
          arg: { removeMovie },
        } = action.meta;
        if (removeMovie) {
          state.userMovies = state.userMovies.filter((item) => item.imdbID !== removeMovie);
        }
      })
      .addCase(deleteMovie.rejected, (state, action) => {
        state.error = true;
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(getMoviesByUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMoviesByUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userMovies = action.payload;
      })
      .addCase(getMoviesByUser.rejected, (state, action) => {
        state.error = true;
        state.loading = false;
        state.message = action.payload.message;
      })
  }
});

export const {
  setMovieInFavorite,
  deleteMovieFromFavorite,
  deleteAllMoviesFromFavorite,
  setMovies
} = favoriteSlice.actions;
export default favoriteSlice.reducer;
