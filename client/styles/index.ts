import styled from "styled-components";

export const Spacer = styled.div`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}PX` : "100%")};
`;
