import styled from "styled-components";
import Nav from "./components/Nav";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import Main from "./components/Main";
import Box from "./components/Box";
import MovieList from "./components/MovieList";

const AppContainer = styled.div`
  width: 100rem;
  /* background-color: #28354d; */
  background-color: #030309;
  border-radius: 23px;
  padding: 3rem;
`;

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
      </Main>
    </AppContainer>
  );
}

export default App;
