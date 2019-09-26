import React from "react";
import { connect } from "react-redux";

import { AppState } from "../types";
import { Login as StyledLogin, InfoBar, Onboarding } from "./styles";
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
        <Input label="Enter email" type="email" icon="email" />
        <Spacer height={16} />
        <Input label="Enter password" type="password" icon="password" />
      </Onboarding>
    </StyledLogin>
  );
};

const mapStateToProps = (app: AppState) => ({
  vw: app.viewport.width
});

export default connect(mapStateToProps)(Login);
