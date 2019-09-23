import { combineReducers } from "redux";

import * as atypes from "../actions/types";

const viewport = (
  state: { width: number; height: number } = { width: 0, height: 0 },
  { type, payload }: any
) => {
  switch (type) {
    case atypes.SET_CLIENT_DIMENSIONS:
      return payload;
    default:
      return state;
  }
};

const root = combineReducers({ viewport });

export default root;
