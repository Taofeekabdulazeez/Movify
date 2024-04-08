import { useContext } from "react";
import { MoviesContext } from "./contexts/MoviesContext";
import { watchedMovieObj } from "../interfaces/interface";
import styled from "styled-components";
import WatchedMovie from "./WatchedMovie";

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

function WatchedList() {
  const { watchedList } = useContext(MoviesContext);
  return (
    <List>
      {watchedList?.map((watched: watchedMovieObj) => (
        <WatchedMovie key={watched.id} watched={watched} />
      ))}
    </List>
  );
}

export default WatchedList;
