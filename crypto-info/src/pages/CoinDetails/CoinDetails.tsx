import { FC } from "react";

import { Button } from "@anhthi-projects/usy-ui";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

interface CoinDetailsProps {
  baseHistory: any;
}

export const CoinDetails: FC<CoinDetailsProps> = ({ baseHistory }) => {
  const history = useHistory();
  const { coinCode } = useParams<{ coinCode: string }>();

  const backToOverview = () => {
    history.goBack();
  };

  const redirectToHoldings = () => {
    baseHistory.push("/holdings");
  };

  return (
    <Container>
      <p>
        This is the Crypto Info - <strong>{coinCode}</strong> Coin Details
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Button onClick={backToOverview}>Back</Button>
        <Button type="outline" onClick={redirectToHoldings}>
          My Holdings
        </Button>
      </div>
    </Container>
  );
};
