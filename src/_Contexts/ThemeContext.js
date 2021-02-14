import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [activeTheme, setActiveTheme] = useState("light");

  const toggleTheme = () => {
    setActiveTheme(activeTheme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, activeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
