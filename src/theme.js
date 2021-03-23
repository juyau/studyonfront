import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {},
    MuiTab: {
      root: {
        textTransform: "none",
      },
    },
  },

  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The default props to change
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
});

export default theme;
