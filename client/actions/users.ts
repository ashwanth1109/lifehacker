import * as atypes from "./types";

export const registerUser = ({ username, password }) => ({
  type: atypes.REGISTER_USER,
  payload: { username, password }
});
