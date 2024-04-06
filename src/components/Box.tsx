import { ReactNode, useState } from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  position: relative;
`;

const Button = styled.button`
  display: inline-block;
  font-weight: 600;
  font-size: 1.8rem;
  position: absolute;
  border: 0;
  background: none;
  background-color: aliceblue;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  top: 0;
  right: 0;
  cursor: pointer;
`;

interface BoxProps {
  children?: ReactNode;
}

function Box({ children }: BoxProps) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => setIsOpen((open) => !open);

  return (
    <StyledBox>
      <Button onClick={handleClick}>{isOpen ? "-" : "+"}</Button>
      {isOpen && children}
    </StyledBox>
  );
}

export default Box;
