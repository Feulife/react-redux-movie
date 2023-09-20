import { getMovies } from "../../store/favorite/reducer.js";
import { useDispatch } from "react-redux";

const GiveMovies = () => {
  const dispatch = useDispatch();
  const moviesDB = [];
  moviesDB.push(dispatch(getMovies()));
  console.log(moviesDB);
};

export default GiveMovies;
