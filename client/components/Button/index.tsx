import React from "react";

import { Button } from "./styles";
import { ButtonTypes } from "./types";

export default ({ children, type }: ButtonTypes) => {
  return <Button type={type}>{children}</Button>;
};
