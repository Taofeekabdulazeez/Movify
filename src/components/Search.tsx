import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

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

function Search() {
  return (
    <InputBox>
      <FiSearch size={20} color="#cdc5bb" />
      <StyledInput placeholder="Search for movies" />
    </InputBox>
  );
}

export default Search;
