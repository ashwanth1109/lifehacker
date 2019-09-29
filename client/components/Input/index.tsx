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

export default ({ type, icon, placeholder, value, setValue }: InputTypes) => {
  const [focus, setFocus] = useState(false);

  const handleFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const handleBlur = useCallback(() => {
    setFocus(false);
  }, []);

  const handleChange = useCallback(
    (e: any) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  return (
    <Input>
      <Spacer height={8} />
      <Field>
        <FieldIcon>
          <Icon icon={icon} />
        </FieldIcon>
        <FieldInput
          type={type}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder || ""}
          value={value}
          onChange={handleChange}
        />
        <Highlight focus={focus} />
      </Field>
    </Input>
  );
};
