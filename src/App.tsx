import { MoviesProvider } from "./contexts/MoviesContext";
import styled from "styled-components";
import Nav from "./components/Nav";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import Main from "./components/Main";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import WatchedList from "./components/WatchedList";
import Logo from "./ui/Logo";
import Theme from "./components/Theme";
import { AppThemeProvider } from "./contexts/AppThemeContext";

const AppContainer = styled.div`
  width: 118rem;
  background-color: var(--bg-app);
  border-radius: 23px;
  padding-block: 3rem;
`;

function App() {
  return (
    <AppThemeProvider>
      <MoviesProvider>
        <AppContainer>
          <Nav>
            <Logo />
            <Search />
            {false && <NumResults />}
            {true && <Theme />}
          </Nav>
          <Main>
            <MovieList />
            <MovieDetails />
            <WatchedList />
          </Main>
        </AppContainer>
      </MoviesProvider>
    </AppThemeProvider>
  );
}

export default App;
