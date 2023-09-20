import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/header.js";
import { Main } from "./pages/home-page/Main.js";
import { Login } from "./pages/login-page/Login.js";
import { Register } from "./pages/register-page/Register.js";
import { FavoritePage } from "./pages/favorite-page/favorite-page.js";
import { MoviePage } from "./pages/movie-page/movie-page.js";
import { useDispatch } from "react-redux";
import { setUser } from "./store/auth/authSlice.js";
import PrivateRoute from "./components/private-route/PrivateRoute.js";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container } from '@mui/material';


function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
  }, []);

  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <div className="App">
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <Header />
          <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/app/:title" element={<MoviePage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Favorite" element={
              <PrivateRoute>
                <FavoritePage />
               </PrivateRoute>
            } />
          </Routes>
          </Container>
        </ThemeProvider>
      </CssBaseline>
    </div>
  );
}

export default App;
