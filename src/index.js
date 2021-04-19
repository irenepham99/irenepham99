import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#66FCF1",
      main: "#45A298", //brightest
      contrastText: "#C5C6C7",
    },
    secondary: {
      main: green[500],
    },
  },
  background: {
    paper: "#1F2833",
  },
  text: {
    primary: "#C5C6C7",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
