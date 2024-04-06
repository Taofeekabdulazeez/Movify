import { ReactNode } from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr;
  overflow-y: hidden;
  padding: 1rem;
`;

interface MainProps {
  children: ReactNode;
}

function Main({ children }: MainProps) {
  return <StyledMain>{children}</StyledMain>;
}

export default Main;
