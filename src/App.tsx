import styled from "styled-components";
import Nav from "./components/Nav";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import Main from "./components/Main";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import Parallax from "./components/Parallax";
import { useEffect } from "react";

const AppContainer = styled.div`
  width: 100rem;
  /* background-color: #28354d; */
  background-color: #030309;
  border-radius: 23px;
  padding-block: 3rem;
`;

// const apiKey = "b44e8d38";
const id = "tt0477347";

function App() {
  useEffect(function () {
    async function getMovieByID() {
      const response = await fetch(
        `http://www.omdbapi.com/?i=${id}&apikey=b44e8d38&`
      );
      const data = await response.json();
      console.log(data);
    }
    getMovieByID();
  }, []);

  return (
    <AppContainer>
      <Nav>
        <Search />
        <NumResults />
      </Nav>

      <Main>
        <Box>
          <MovieList />
        </Box>
        <Parallax />
      </Main>
    </AppContainer>
  );
}

export default App;
