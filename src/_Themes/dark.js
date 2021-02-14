import { createMuiTheme } from "@material-ui/core/styles";
import { red, brown } from "@material-ui/core/colors";

const DarkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
  typography: {
    subtitle1: {
      color: red[200],
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    subtitle2: {
      color: "white",
      textDecoration: "none",
    },
    h3: {
      margin: "1rem",
    },
    h4: {
      marginBottom: "1rem",
    },
    h6: {
      margin: "1rem",
    },
    fontFamily: "Quicksand",
  },
});

DarkTheme.overrides = {
  MuiButton: {
    root: {
      color: "white",
      backgroundColor: brown[600],
      border: "1px solid black",
      "&:hover": {},
    },
  },
  MuiCard: {
    root: {
      padding: "1rem",
    },
  },
};

export default DarkTheme;
