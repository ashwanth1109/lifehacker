import React from "react";

import Icon from "../Icon";
import {
  Input,
  Label,
  Field,
  FieldIcon,
  FieldInput,
  Highlight
} from "./styles";
import { InputTypes } from "./types";

export default ({ label, type, icon }: InputTypes) => {
  return (
    <Input>
      <Label>{label}</Label>
      <Field>
        <FieldIcon>
          <Icon icon={icon} />
        </FieldIcon>
        <FieldInput type={type} />
        <Highlight />
      </Field>
    </Input>
  );
};
