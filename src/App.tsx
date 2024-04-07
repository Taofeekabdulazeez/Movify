import styled from "styled-components";
import Nav from "./components/Nav";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import Main from "./components/Main";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import React, { useEffect, useState } from "react";
import MovieDetails, { MovieObj } from "./components/MovieDetails";
import Spinner from "./ui/Spinner";

const AppContainer = styled.div`
  width: 100rem;
  /* background-color: #28354d; */
  background-color: #030309;
  border-radius: 23px;
  padding-block: 3rem;
`;

// const apiKey = "b44e8d38";
// const id = "tt0477347";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedId, setSelectedId] = useState("tt0477347");
  const [movie, setMovie] = useState<MovieObj>({});
  const [isLoading2, setIsLoading2] = useState(false);

  const handleSelectId = (id: string) => setSelectedId(id);

  useEffect(
    function () {
      async function getMovies() {
        try {
          setError(false);
          setIsLoading(true);
          const response = await fetch(
            `http://www.omdbapi.com/?apikey=b44e8d38&s=${query}`
          );
          const data = await response.json();
          // console.log(data.Search);
          setMovies(data.Search);
          setIsLoading(false);
        } catch (error) {
          setError(true);
        }
      }
      if (query.length < 3) return;
      getMovies();
    },
    [query]
  );

  useEffect(
    function () {
      async function getMovieByID() {
        try {
          setIsLoading2(true);
          const response = await fetch(
            `http://www.omdbapi.com/?i=${selectedId}&apikey=b44e8d38&`
          );
          const data = await response.json();
          console.log(data);
          setMovie(data);
          setIsLoading2(false);
        } catch (error) {
          console.log(error);
        }
      }
      getMovieByID();
    },
    [selectedId]
  );

  return (
    <AppContainer>
      <Nav>
        <Search
          query={query}
          setQuery={(event: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(event.target.value)
          }
        />
        <NumResults movies={movies} />
      </Nav>

      <Main>
        <Box>
          <MovieList
            movies={movies}
            isLoading={isLoading}
            error={error}
            setId={handleSelectId}
          />
        </Box>
        {isLoading2 ? (
          <Spinner />
        ) : (
          <MovieDetails id={selectedId} movie={movie} />
        )}
      </Main>
    </AppContainer>
  );
}

export default App;
