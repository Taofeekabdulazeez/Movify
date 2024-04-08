import styled from "styled-components";
import WatchedMovie, { watchedObj } from "./WatchedMovie";

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

interface WatchedListProps {
  watchedMovies: Array<watchedObj>;
  handleDeleteWatch: (id: string) => void;
}

function WatchedList({ watchedMovies, handleDeleteWatch }: WatchedListProps) {
  return (
    <List>
      {watchedMovies.map((watched: watchedObj) => (
        <WatchedMovie
          key={watched.id}
          watched={watched}
          handleDeleteWatch={handleDeleteWatch}
        />
      ))}
    </List>
  );
}

export default WatchedList;
