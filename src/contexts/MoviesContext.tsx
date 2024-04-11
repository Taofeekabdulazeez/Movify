import { createContext, useEffect, useState } from "react";
import {
  MovieDetailsObj,
  MovieObj,
  MoviesContextInterface,
  MoviesProviderProps,
  watchedMovieObj,
} from "../interfaces/interface";
import { useLocalStorage } from "../hooks/useLocalStorage";

const MoviesContext = createContext<MoviesContextInterface>({
  movie: {
    imdbID: "",
  },
});

function MoviesProvider({ children }: MoviesProviderProps) {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<MovieObj[]>([]);
  const [isLoadingMovies, setIsLoadingMovies] = useState(false);
  const [error, setError] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [movie, setMovie] = useState<MovieDetailsObj>({ imdbID: "" });
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const [watchedList, setWatchedList] = useLocalStorage([], "watched");
  const [userRating, setUserRating] = useState(0);

  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(event.target.value);

  const handleSelectedId = (id: string) => setSelectedId(id);
  const handleAddWatched = (newMovie: watchedMovieObj) => {
    setWatchedList((watchedMovies: Array<watchedMovieObj>) => [
      ...watchedMovies,
      newMovie,
    ]);
  };

  const handleDeleteWatched = (id: string) =>
    setWatchedList((watchedMovies: Array<watchedMovieObj>) =>
      watchedMovies.filter((watched) => watched.id !== id)
    );

  const handleUserRating = (rating: number) => setUserRating(rating);

  useEffect(
    function () {
      async function getMovies() {
        try {
          setError(false);
          setIsLoadingMovies(true);
          const response = await fetch(
            `http://www.omdbapi.com/?apikey=b44e8d38&s=${query}`
          );
          const data = await response.json();
          setMovies(data.Search);
          setIsLoadingMovies(false);
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
          setIsLoadingDetails(true);
          const response = await fetch(
            `http://www.omdbapi.com/?i=${selectedId}&apikey=b44e8d38&`
          );
          const data = await response.json();
          setMovie(data);
          setIsLoadingDetails(false);
          setUserRating(0);
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
        userRating,
        isLoadingMovies,
        isLoadingDetails,
        handleDeleteWatched,
        handleAddWatched,
        handleSelectedId,
        handleUserRating,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export { MoviesContext, MoviesProvider };
