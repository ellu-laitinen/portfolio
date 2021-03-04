import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Projects from "./containers/Projects/Projects";
import About from "./containers/About/About";
import "./App.css";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import Contact from "./containers/Contact/Contact";

import LightTheme from "./_Themes/light";
import DarkTheme from "./_Themes/dark";
import { ThemeContext } from "./_Contexts/ThemeContext";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import ProjectContextProvider from "./_Contexts/ProjectContext";
import Container from "@material-ui/core/Container";

const App = () => {
  const { activeTheme } = useContext(ThemeContext);
  return (
    <>
      <ThemeProvider theme={activeTheme === "dark" ? DarkTheme : LightTheme}>
        <ProjectContextProvider>
          <CssBaseline />
          <BrowserRouter>
            <Header />

            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/experience" component={About} />
              <Route path="/projects" component={Projects} />
            </Switch>
          </BrowserRouter>{" "}
          {/*   <Footer /> */}
        </ProjectContextProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
