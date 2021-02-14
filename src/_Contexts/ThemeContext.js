import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [activeTheme, setActiveTheme] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

  const toggleTheme = () => {
    setActiveTheme(activeTheme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContextProvider value={{ toggleTheme, activeTheme }}>
      {props.children}
    </ThemeContextProvider>
  );
};

export default ThemeContextProvider;
