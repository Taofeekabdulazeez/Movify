import styled from "styled-components";
import Movie from "./Movie";
import Spinner from "../ui/Spinner";
import Error from "../ui/Error";

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

interface MovieObj {
  imdbID: string;
  Title: string;
  Poster: string;
  Year: number;
}

interface MovieListProps {
  error?: boolean;
  isLoading?: boolean;
  movies: Array<MovieObj>;
  setId: (id: string) => void;
}

function MovieList({ error, isLoading, movies, setId }: MovieListProps) {
  if (error) return <Error message="Couldn't find movies!" />;

  return (
    <List>
      {isLoading && !error ? (
        <Spinner />
      ) : (
        movies?.map((movie: MovieObj) => (
          <Movie
            key={movie.imdbID}
            title={movie.Title}
            img={movie.Poster}
            year={movie.Year}
            id={movie.imdbID}
            setId={setId}
          />
        ))
      )}
    </List>
  );
}

export default MovieList;
