import { blue } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";
import { red, brown, grey } from "@material-ui/core/colors";

const LightTheme = createMuiTheme({
  palette: {
    type: "light",
  },

  typography: {
    subtitle1: {
      color: red[800],
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    subtitle2: {
      color: "black",
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

LightTheme.overrides = {
  MuiButton: {
    root: {
      backgroundColor: "antiquewhite",
      border: "1px solid black",
      "&:hover": {
        backgroundColor: brown[200],
      },
    },
  },
  MuiCard: {
    root: {
      padding: "1rem",
      backgroundColor: grey[200],
    },
  },
};

export default LightTheme;
