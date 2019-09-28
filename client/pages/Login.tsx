import React, { useState, useCallback } from "react";
import { connect } from "react-redux";

import { AppState } from "../types";
import {
  Login as StyledLogin,
  InfoBar,
  Onboarding,
  Form,
  SignInSignUp
} from "./styles";
import Input from "../components/Input";
import { Spacer } from "client/styles";
import Button from "client/components/Button";

type Props = {
  vw: number;
};

const Login = ({ vw }: Props) => {
  const [register, setRegister] = useState(false);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      if (register) {
        // make API call for registering a user
      }
    },
    [register]
  );
  return (
    <StyledLogin>
      {vw > 1000 && <InfoBar />}
      <Onboarding>
        <Form onSubmit={handleSubmit}>
          <SignInSignUp register={register}>
            <span onClick={() => register && setRegister(false)}>Sign In</span>
            <span> or </span>
            <span onClick={() => !register && setRegister(true)}>Sign Up</span>
          </SignInSignUp>
          <Spacer height={40} />
          <Input type="email" icon="email" placeholder="Enter your email" />
          <Spacer height={16} />
          <Input
            type="password"
            icon="lock"
            placeholder="Enter your password"
          />
          <Spacer height={40} />
          <Button type="submit">{register ? "Sign Up" : "Log In"}</Button>
        </Form>
      </Onboarding>
    </StyledLogin>
  );
};

const mapStateToProps = (app: AppState) => ({
  vw: app.viewport.width
});

export default connect(mapStateToProps)(Login);
