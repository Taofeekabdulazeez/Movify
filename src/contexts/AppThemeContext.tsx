import { createContext, useContext, useEffect, useState } from "react";
import {
  ThemeContextInterface,
  ThemeProviderProps,
} from "../interfaces/interface";

const ThemeContext = createContext<ThemeContextInterface>({});

function AppThemeProvider({ children }: ThemeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => setIsDarkMode((dark) => !dark);

  useEffect(
    function () {
      if (isDarkMode) document.documentElement.classList.remove("light-mode");
      else document.documentElement.classList.add("light-mode");
    },
    [isDarkMode]
  );

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useDarkMode(): ThemeContextInterface {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error("ThemeContext is used outside of AppThemeProvider");

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { AppThemeProvider, useDarkMode };
