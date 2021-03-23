import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "fontsource-roboto";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
    <CssBaseline />
  </ThemeProvider>,
  document.getElementById("root")
);
