import { useContext, useMemo } from "react";

import { Button } from "@anhthi-projects/usy-ui";
import { useHistory, useParams } from "react-router-dom";
import { AppContext } from "src/App";
import styled from "styled-components";
import { coinData } from "src/data/coinData";
import { CtaContainer, Row } from "./CoinDetails.styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CoinDetails = () => {
  const { baseHistory } = useContext(AppContext);
  const history = useHistory();
  const { coinCode } = useParams<{ coinCode: string }>();

  const coinDetail = useMemo(() => {
    return coinData.find(
      ({ code }) => code.toLowerCase() === coinCode.toLowerCase()
    );
  }, [coinCode]);

  const backToOverview = () => {
    history.goBack();
  };

  const redirectToHoldings = () => {
    baseHistory.push("/holdings");
  };

  return (
    <Container>
      <h3 style={{ fontWeight: 300 }}>
        <strong>{coinDetail.code}</strong> - Coin Details
      </h3>
      <Row>
        <span>Code</span>
        <strong>{coinDetail.code}</strong>
      </Row>
      <Row>
        <span>Name</span>
        <strong>{coinDetail.name}</strong>
      </Row>
      <Row>
        <span>Bid</span>
        <strong>{coinDetail.bid}</strong>
      </Row>
      <Row>
        <span>Bid</span>
        <strong>{coinDetail.bid}</strong>
      </Row>
      <Row>
        <span>Ask</span>
        <strong>{coinDetail.ask}</strong>
      </Row>
      <Row>
        <span>Update Time</span>
        <strong>{coinDetail.updatedTime}</strong>
      </Row>
      <CtaContainer>
        <Button onClick={backToOverview}>Back</Button>
        <Button type="outline" onClick={redirectToHoldings}>
          My Holdings
        </Button>
        <Button type="primary" onClick={redirectToHoldings}>
          Placed Trade
        </Button>
      </CtaContainer>
    </Container>
  );
};
