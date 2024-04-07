import styled from "styled-components";

const P = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
`;

interface NumResultsProps {
  movies?: Array<object>;
}

function NumResults({ movies }: NumResultsProps) {
  return <P>Found {movies ? movies.length : 0} results</P>;
}

export default NumResults;
