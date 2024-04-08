import { ReactNode } from "react";

export interface MoviesContextInterface {
  query?: string;
  handleQuery?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  movies?: Array<MovieObj>;
  isLoadingMovies?: boolean;
  error?: boolean;
  selectedId?: string;
  movie: MovieDetailsObj;
  isLoadingDetails?: boolean;
  watchedList?: Array<watchedMovieObj>;
  handleSelectedId?: (id: string) => void;
  handleAddWatched?: (newMovie: watchedMovieObj) => void;
  handleDeleteWatched?: (id: string) => void;
}

export interface MoviesProviderProps {
  children: ReactNode;
}

export interface MovieProps {
  movie: MovieObj;
}

export interface MovieObj {
  imdbID: string;
  Title?: string;
  Poster?: string;
  Year?: number;
}

export interface MovieDetailsObj {
  Title?: string;
  Genre?: string;
  Language?: string;
  Released?: string;
  Runtime?: string;
  imdbVotes?: string;
  Director?: string;
  Country?: string;
  Plot?: string;
  Actors?: string;
  Poster?: string;
  imdbID: string;
  imdbRating?: string;
}

export interface watchedMovieObj {
  id: string;
  image?: string;
  title?: string;
  imdbRating?: number;
  runtime?: number;
  userRating?: number;
}

export interface BoxProps {
  children?: ReactNode;
}
