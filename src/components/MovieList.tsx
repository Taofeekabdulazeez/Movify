import styled from "styled-components";
import Movie from "./Movie";
import { useEffect, useState } from "react";

const List = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 1rem;
  overflow-y: scroll;
  height: 40rem;

  &::-webkit-scrollbar {
    /* display: none; */
  }
`;

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  interface M {
    Title: string;
    Poster: string;
    Year: number;
  }

  useEffect(function () {
    async function getMovies() {
      setIsLoading(true);
      const response = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=b44e8d38&s=don`
      );
      const data = await response.json();
      console.log(data.Search);
      setMovies(data.Search);
      setIsLoading(false);
      // console.log(movies);///////
    }
    getMovies();
  }, []);

  return (
    <List>
      {isLoading ? (
        <h3>Loading..</h3>
      ) : (
        movies.map((movie: M) => (
          <Movie
            key={movie.Title}
            title={movie.Title}
            img={movie.Poster}
            year={movie.Year}
          />
        ))
      )}
    </List>
  );
}

export default MovieList;
