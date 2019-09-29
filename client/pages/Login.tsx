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
import { registerUser } from "client/actions/users";

type Props = {
  vw: number;
  _registerUser: Function;
};

const Login = ({ vw, _registerUser }: Props) => {
  const [register, setRegister] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      if (register) {
        // make API call for registering a user
        _registerUser({ username, password });
      }
    },
    [register, username, password]
  );

  const showSignUp = useCallback(() => {
    setRegister(true);
  }, []);

  const showSignIn = useCallback(() => {
    setRegister(false);
  }, []);

  return (
    <StyledLogin>
      {vw > 1000 && <InfoBar />}
      <Onboarding>
        <Form onSubmit={handleSubmit}>
          <SignInSignUp register={register}>
            <span onClick={showSignIn}>Sign In</span>
            <span> or </span>
            <span onClick={showSignUp}>Sign Up</span>
          </SignInSignUp>
          <Spacer height={40} />
          <Input
            type="email"
            icon="email"
            placeholder="Enter your email"
            value={username}
            setValue={setUsername}
          />
          <Spacer height={16} />
          <Input
            type="password"
            icon="lock"
            placeholder="Enter your password"
            value={password}
            setValue={setPassword}
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

export default connect(
  mapStateToProps,
  {
    _registerUser: registerUser
  }
)(Login);
