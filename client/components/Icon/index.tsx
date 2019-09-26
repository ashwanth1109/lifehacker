import React from "react";

import Email from "./Email";
import { IconTypes } from "./types";

export default ({ icon, ...props }: IconTypes) => {
  switch (icon) {
    case "email":
      return <Email {...props} />;
    default:
      return null;
  }
};
