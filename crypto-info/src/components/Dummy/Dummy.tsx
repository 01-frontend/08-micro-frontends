import { FC, ReactNode } from "react";

import styled from "styled-components";

const StyledDummy = styled.div`
  background-color: #c91f37;
  padding: 14px 18px;
`;

interface DummyProps {
  children: ReactNode;
}

export const Dummy: FC<DummyProps> = ({ children }) => {
  return <StyledDummy>{children}</StyledDummy>;
};
