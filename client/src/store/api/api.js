import axios from "axios";

const API = axios.create({
  baseURL: "https://movie-app-server-sand.vercel.app/"
  // baseURL: "http://localhost:5000"
})

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token
      }`;
  }
  return req;
});

export const signIn = (formData) => API.post("/users/signin", formData);

export const signUp = (formData) => API.post("/users/signup", formData);

export const getMoviesByUser = async (userId) => await API.get(`/movies/userMovies/${userId}`);

export const createMovie = async (addItem) => await API.post("/movies", addItem);

export const deleteMovie = async (removeMovie) => await API.delete(`/movies/${removeMovie}`);


