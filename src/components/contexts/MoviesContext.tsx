import { createContext, useEffect, useState } from "react";
import {
  MovieDetailsObj,
  MovieObj,
  MoviesContextInterface,
  MoviesProviderProps,
  watchedMovieObj,
} from "../../interfaces/interface";

const MoviesContext = createContext<MoviesContextInterface>({
  movie: {
    imdbID: "",
  },
});

function MoviesProvider({ children }: MoviesProviderProps) {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<MovieObj[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedId, setSelectedId] = useState("tt0477347");
  const [movie, setMovie] = useState<MovieDetailsObj>({ imdbID: "" });
  const [isLoading2, setIsLoading2] = useState(false);
  const [watchedList, setWatchedList] = useState<watchedMovieObj[]>([]);

  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(event.target.value);

  const handleSelectId = (id: string) => setSelectedId(id);
  const handleAddWatched = (newMovie: watchedMovieObj) => {
    setWatchedList((watchedMovies: Array<watchedMovieObj>) => [
      ...watchedMovies,
      newMovie,
    ]);
  };

  const handleDeleteWatched = (id: string) =>
    setWatchedList((watchedMovies) =>
      watchedMovies.filter((watched) => watched.id !== id)
    );

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
    <MoviesContext.Provider
      value={{
        query,
        handleQuery,
        movie,
        movies,
        error,
        watchedList,
        isLoading,
        isLoading2,
        handleDeleteWatched,
        handleAddWatched,
        handleSelectId,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export { MoviesContext, MoviesProvider };
