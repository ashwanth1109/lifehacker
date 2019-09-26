import React from "react";
import { connect } from "react-redux";

import { AppState } from "../types";
import { Login as StyledLogin, InfoBar, Onboarding, Form } from "./styles";
import Input from "../components/Input";
import { Spacer } from "client/styles";

type Props = {
  vw: number;
};

const Login = ({ vw }: Props) => {
  return (
    <StyledLogin>
      {vw > 1000 && <InfoBar />}
      <Onboarding>
        <Form>
          <Input label="Email" type="email" icon="email" />
          <Spacer height={16} />
          <Input label="Password" type="password" icon="password" />
        </Form>
      </Onboarding>
    </StyledLogin>
  );
};

const mapStateToProps = (app: AppState) => ({
  vw: app.viewport.width
});

export default connect(mapStateToProps)(Login);
