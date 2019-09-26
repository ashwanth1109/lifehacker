import styled from "styled-components";

export const Spacer = styled<any>("div")`
  width: ${props => (props.width ? props.width : "100%")};
  height: ${props => (props.height ? props.height : "100%")};
`;
