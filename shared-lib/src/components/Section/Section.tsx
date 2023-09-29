import { FC, ReactNode } from "react";

import { StyledSection, StyledTitle } from "./Section.styled";

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <StyledSection>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledSection>
  );
};

export default Section;
