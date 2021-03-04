import { createMuiTheme } from "@material-ui/core/styles";
import { red, brown, purple, teal } from "@material-ui/core/colors";

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
      marginBottom: "1rem",
    },
    /*    h4: {
      marginBottom: "1rem",
    }, */
    h5: {
      color: "white",
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
      backgroundColor: teal[600],
      border: "1px solid black",
      "&:hover": {},
    },
  },
  MuiSvgIcon: {
    colorPrimary: {
      color: "white",
      marginRight: "1rem",
    },
  },
  MuiAppBar: {
    colorPrimary: {
      backgroundColor: teal[900],
      color: "white",
      boxShadow: "none",
      padding: "1rem",
    },
  },
  MuiCard: {
    root: {
      padding: "1rem",
    },
  },
  MuiLink: {
    root: {
      color: purple[100],
    },
  },
};

export default DarkTheme;
