import { createStore } from "redux";

import root from "./reducers";

const store = createStore(root);

export default store;
