import styled from "styled-components";
import { themeGradient } from "client/styles/colors";

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Label = styled.div`
  font-size: 0.8rem;
`;

export const Field = styled.div`
  display: flex;
  height: 50px;
`;

export const FieldIcon = styled.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FieldInput = styled.input`
  border: 0;
  outline: none;
  flex: 1;
  padding: 0 16px;
  font-size: 1.2rem;
`;

export const Highlight = styled<any>("div")`
  position: absolute;
  bottom: 0;
  height: 2px;
  width: 100%;
  background: ${({ focus }) => (focus ? themeGradient : "#bbb")};
`;
