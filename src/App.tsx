import styled from "styled-components";
import Nav from "./components/Nav";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import Main from "./components/Main";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import Parallax from "./components/Parallax";

const AppContainer = styled.div`
  width: 100rem;
  /* background-color: #28354d; */
  background-color: #030309;
  border-radius: 23px;
  padding-block: 3rem;
`;

// const apiKey = "b44e8d38";

function App() {
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
