import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader";

import "./styles/index.css";
import App from "./App";
import store from "./store";

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  React.createElement(hot(module)(AppWithStore)),
  document.getElementById("root")
);
