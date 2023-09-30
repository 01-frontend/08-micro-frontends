import styled from "styled-components";

import { Color, FontWeight } from "../../styles/variables";

export const StyledSection = styled.div`
  border: 1px solid ${Color.Light3};
  border-radius: 6px;
  padding: 16px;
`;

export const StyledTitle = styled.h4`
  text-align: center;
  font-weight: ${FontWeight.SemiBold};
`;
