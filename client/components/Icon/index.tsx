import React from "react";

import Email from "./Email";
import Lock from "./Lock";
import { IconTypes } from "./types";

export default ({ icon, ...props }: IconTypes) => {
  switch (icon) {
    case "email":
      return <Email {...props} />;
    case "lock":
      return <Lock {...props} />;
    default:
      return null;
  }
};
