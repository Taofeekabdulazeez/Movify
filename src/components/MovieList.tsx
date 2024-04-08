import styled from "styled-components";
import Movie from "./Movie";
import Spinner from "../ui/Spinner";
import Error from "../ui/Error";
import { useContext } from "react";
import { MoviesContext } from "./contexts/MoviesContext";
import { MovieObj } from "../interfaces/interface";

const List = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 1rem;
  overflow-y: scroll;
  height: 40rem;
  padding-right: 1rem;

  &::-webkit-scrollbar {
    /* display: none; */
  }
`;

// interface MovieListProps {
//   error?: boolean;
//   isLoading?: boolean;
//   movies: Array<MovieObj>;
//   setId: (id: string) => void;
// }

function MovieList() {
  const { error, isLoading, movies } = useContext(MoviesContext);

  if (error) return <Error message="Couldn't find movies!" />;

  return (
    <List>
      {isLoading && !error ? (
        <Spinner />
      ) : (
        movies?.map((movie: MovieObj) => (
          <Movie key={movie.imdbID} movie={movie} />
        ))
      )}
    </List>
  );
}

export default MovieList;
