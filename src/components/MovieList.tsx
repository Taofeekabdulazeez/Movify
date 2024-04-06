import styled from "styled-components";
import Movie from "./Movie";

const List = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 1rem;
  overflow-y: scroll;
`;

function MovieList() {
  return (
    <List>
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      {/* <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie /> */}
      <Movie />
      <Movie />
    </List>
  );
}

export default MovieList;
