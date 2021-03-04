import { blue, teal } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";
import { red, brown, grey, deepPurple } from "@material-ui/core/colors";

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
      color: "green",
      textDecoration: "none",
    },
    /*     h3: {
      marginBottom: "1rem",
    }, */
    /*     h5: {
      marginLeft: "1rem",
    }, */
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
  MuiSvgIcon: {
    colorPrimary: {
      color: "black",
      marginRight: "1rem",
    },
  },
  MuiAppBar: {
    colorPrimary: {
      backgroundColor: teal[100],
      color: "black",
      boxShadow: "none",
      padding: "1rem",
    },
  },
  MuiCard: {
    root: {
      padding: "1rem",
      backgroundColor: grey[200],
    },
  },
  MuiLink: {
    root: {
      color: deepPurple[500],
    },
  },
};

export default LightTheme;
