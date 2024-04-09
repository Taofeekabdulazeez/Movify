import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";

const StyledInput = styled.input`
  border: 0;
  outline: none;
  background-color: inherit;
  /* color: #cdc5bb; */
  color: var(--text-body);
  display: block;

  &::placeholder {
    /* color: #cdc5bb; */
    color: var(--text-body);
  }
`;

const InputBox = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: center;
  padding: 1.2rem 2.4rem;
  background-color: var(--primary-shade);
  border-radius: 23px;
`;

function Search() {
  const { query, handleQuery } = useContext(MoviesContext);
  return (
    <InputBox>
      <FiSearch size={20} color="var(--icon-fill)" />
      <StyledInput
        placeholder="Search for movies"
        value={query}
        onChange={handleQuery}
      />
    </InputBox>
  );
}

export default Search;
