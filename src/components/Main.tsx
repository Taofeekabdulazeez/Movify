import { ReactNode } from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr;
  overflow-y: hidden;
`;

interface MainProps {
  children: ReactNode;
}

function Main({ children }: MainProps) {
  return <StyledMain>{children}</StyledMain>;
}

export default Main;
