import styled from "styled-components";
import { useDarkMode } from "../contexts/AppThemeContext";

const StyledLogo = styled.div`
  font-size: 2rem;
  color: #fff;
  /* font-family: "Courier New", Courier, monospace; */
  & img {
    display: block;
    height: 3rem;
  }
`;

function Logo() {
  const { isDarkMode } = useDarkMode();
  return (
    <StyledLogo>
      {isDarkMode ? (
        <img src="logo.png" alt="movify logo" />
      ) : (
        <img src="logodark.png" alt="movify logo" />
      )}
    </StyledLogo>
  );
}

export default Logo;
