import { useDarkMode } from "../contexts/AppThemeContext";
import styled from "styled-components";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const Button = styled.button`
  display: inline-block;
  background: none;
  border: 0;
  cursor: pointer;
`;

function Theme() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <Button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <MdLightMode size={30} color="var(--text-body)" />
      ) : (
        <MdDarkMode size={30} color="#28354d" />
      )}
    </Button>
  );
}

export default Theme;
