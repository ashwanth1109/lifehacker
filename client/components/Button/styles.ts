import styled from "styled-components";

import * as colors from "client/styles/colors";

export const Button = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  color: ${colors.white};
  font-weight: bold;
  background: ${colors.themeGradient};
`;
