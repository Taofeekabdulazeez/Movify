import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import React from "react";

const StyledInput = styled.input`
  border: 0;
  outline: none;
  background-color: inherit;
  color: #cdc5bb;
  display: block;

  &::placeholder {
    color: #cdc5bb;
  }
`;

const InputBox = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: center;
  padding: 1.2rem 2.4rem;
  background-color: #28354d;
  border-radius: 23px;
`;

interface SearchProps {
  query: string;
  setQuery: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Search({ query, setQuery }: SearchProps) {
  return (
    <InputBox>
      <FiSearch size={20} color="#cdc5bb" />
      <StyledInput
        placeholder="Search for movies"
        value={query}
        onChange={setQuery}
      />
    </InputBox>
  );
}

export default Search;
