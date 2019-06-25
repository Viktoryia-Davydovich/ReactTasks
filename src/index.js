import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "./components/themeSwitch";

import App from "./App";

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
