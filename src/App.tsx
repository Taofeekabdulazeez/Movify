import styled from "styled-components";
import Nav from "./components/Nav";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import Main from "./components/Main";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import WatchedList from "./components/WatchedList";
import { MoviesProvider } from "./components/contexts/MoviesContext";
import Logo from "./ui/Logo";

const AppContainer = styled.div`
  width: 115rem;
  /* background-color: #28354d; */
  background-color: #030309;
  border-radius: 23px;
  padding-block: 3rem;
`;

function App() {
  return (
    <MoviesProvider>
      <AppContainer>
        <Nav>
          <Logo />
          <Search />
          <NumResults />
        </Nav>

        <Main>
          <MovieList />
          <MovieDetails />
          <WatchedList />
        </Main>
      </AppContainer>
    </MoviesProvider>
  );
}

export default App;
