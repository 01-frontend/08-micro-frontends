import { Color, FontWeight } from "shared-lib/dist/styles/variables";
import styled from "styled-components";

export const StyledSection = styled.div`
  border: 1px solid ${Color.Light3};
  border-radius: 6px;
  padding: 0 16px 16px;
  margin: 16px;
`;

export const StyledTitle = styled.div`
  text-align: center;
  padding: 12px 16px;
  font-weight: ${FontWeight.SemiBold};
  border-bottom: 1px solid ${Color.Light3};
`;

export const StyledContent = styled.div`
  padding-top: 16px;
`;
