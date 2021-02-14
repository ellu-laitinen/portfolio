import { createMuiTheme } from "@material-ui/core/styles";

const LightTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
  typography: {
    fontFamily: "Quicksand",
  },
});

/* LightTheme.overrides = {
  MuiButton: {
    root: {
      backgroundColor: "red",
    },
  },
  MuiCard: {
    root: {
      backgroundColor: "grey",
    },
  },
  MuiAppBar: {
    root: {
      backgroundColor: "red",
    },
  },
}; */

export default LightTheme;
