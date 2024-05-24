import { FC } from "react";

import { ArrowHeadLeftIcon, Button } from "@anhthi-projects/usy-ui";
import { Dummy } from "src/components/Dummy";

interface HoldingsListProps {
  baseHistory: any;
}

export const HoldingsList: FC<HoldingsListProps> = ({ baseHistory }) => {
  const goBack = () => {
    baseHistory.goBack();
  };

  return (
    <Dummy>
      <Button onClick={goBack}>
        <ArrowHeadLeftIcon />
      </Button>
      Holdings List
      <span />
    </Dummy>
  );
};
