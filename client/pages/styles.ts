import styled from "styled-components";

export const Login = styled.div`
  display: flex;
  height: 100vh;
`;

export const InfoBar = styled.div`
  flex: 2;
  background: linear-gradient(to right, #8930fd, #49ccf9);
`;

export const Onboarding = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  max-width: 450px;
  width: 80%;
`;

export const SignInSignUp = styled<any>("div")`
  > span {
    cursor: pointer;
    font-size: 2rem;
  }
  > span:nth-child(1) {
    color: ${props => (props.register ? "#343434" : "#7b68ee")};
    text-decoration: ${props => (props.register ? "initial" : "underline")};
  }
  > span:nth-child(2) {
    color: #d2d0d5;
  }
  > span:nth-child(3) {
    color: ${props => (!props.register ? "#343434" : "#7b68ee")};
    text-decoration: ${props => (!props.register ? "initial" : "underline")};
  }
`;
