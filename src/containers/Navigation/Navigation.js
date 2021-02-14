import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Switch from "@material-ui/core/Switch";
/* 
import { ThemeContext } from "../../_Contexts/ThemeContext"; */

const Navigation = () => {
  /*   const { toggleTheme, activeTheme } = useContext(ThemeContext); */
  /* 
  const handleTheme = () => {
    toggleTheme();
  }; */
  return (
    <AppBar position="static" style={{ flexGrow: 1 }}>
      <Toolbar style={{ justifyContent: "flex-end" }} spacing={2}>
        <Link to="/">&lt;Home&gt;</Link>

        <Link to="/about">&lt;About&gt;</Link>

        <Link to="/projects">&lt;Projects&gt;</Link>

        <Link to="/download_cv">&lt;Download CV (in Finnish)&gt;</Link>
        {/*       <Switch
          checked={activeTheme === "dark"}
          onChange={handleTheme}
          color="primary"
        /> */}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
