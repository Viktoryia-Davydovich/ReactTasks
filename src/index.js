import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "./components/themeSwitch";
import { Provider } from "react-redux";

import store from "./store/store";
import App from "./App";

ReactDOM.render(
  <ThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
