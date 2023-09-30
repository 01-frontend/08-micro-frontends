import { FC, ReactNode } from "react";

import { StyledContent, StyledSection, StyledTitle } from "./Section.styled";

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <StyledSection>
      <StyledTitle>{title}</StyledTitle>
      <StyledContent>{children}</StyledContent>
    </StyledSection>
  );
};

export default Section;
