import React from "react";
import { connect } from "react-redux";

import { AppState } from "../types";
import { Login as StyledLogin, InfoBar, Onboarding } from "./styles";

type Props = {
  vw: number;
};

const Login = ({ vw }: Props) => {
  return (
    <StyledLogin>
      {vw > 1000 && <InfoBar />}
      <Onboarding />
    </StyledLogin>
  );
};

const mapStateToProps = (app: AppState) => ({
  vw: app.viewport.width
});

export default connect(mapStateToProps)(Login);
