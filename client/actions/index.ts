import * as atypes from "./types";

export const setClientDimensions = (width: number, height: number) => ({
  type: atypes.SET_CLIENT_DIMENSIONS,
  payload: { width, height }
});
