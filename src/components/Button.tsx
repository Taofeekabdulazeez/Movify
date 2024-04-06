import { IoMdAddCircleOutline } from "react-icons/io";
import styled from "styled-components";

const StyledButton = styled.button`
  background: none;
  border: 0;
  padding: 1.2rem 1.4rem;
  /* background-color: #28354d; */
  /* background-color: #0c56b7; */
  /* background-color: #59100d; */
  /* background-color: #b12c1e; */
  /* background-color: #c89c5a; */
  /* background: linear-gradient(to right, #59100d, #b12c1e); */
  background: linear-gradient(to bottom right, #0c56b7, #28354d);

  color: #fff;
  font-size: 1.4rem;
  font-weight: 600;
  border-radius: 9px;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  justify-content: center;
`;

function Button() {
  return (
    <StyledButton>
      <IoMdAddCircleOutline size={20} color="#fff" />
      <span>Add to List</span>
    </StyledButton>
  );
}

export default Button;
