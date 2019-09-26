import React, { useCallback, useState } from "react";

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
import { Spacer } from "client/styles";

export default ({ label, type, icon }: InputTypes) => {
  const [focus, setFocus] = useState(false);

  const handleFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const handleBlur = useCallback(() => {
    setFocus(false);
  }, []);

  return (
    <Input>
      <Label>{label}</Label>
      <Spacer height={8} />
      <Field>
        <FieldIcon>
          <Icon icon={icon} />
        </FieldIcon>
        <FieldInput type={type} onFocus={handleFocus} onBlur={handleBlur} />
        <Highlight focus={focus} />
      </Field>
    </Input>
  );
};
