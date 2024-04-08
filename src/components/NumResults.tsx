import { useContext } from "react";
import styled from "styled-components";
import { MoviesContext } from "../contexts/MoviesContext";

const P = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
`;

function NumResults() {
  const { movies } = useContext(MoviesContext);
  return <P>Found {movies ? movies.length : 0} results</P>;
}

export default NumResults;
