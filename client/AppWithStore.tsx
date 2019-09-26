import React from "react";
import { hot } from "react-hot-loader";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default hot(module)(AppWithStore);
