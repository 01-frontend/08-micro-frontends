import { FC } from "react";

import { Button } from "@anhthi-projects/usy-ui";
import { useHistory } from "react-router-dom";
import { AppRoutes } from "src/common/constants";
import { mapParams } from "src/utils/helpers";

import {
  CoinCode,
  CoinInfoContainer,
  CoinName,
  ColumnDirection,
  Container,
  CtaContainer,
  Price,
} from "./CoinInfoRow.styled";

interface CoinInfoRowProps {
  name: string;
  code: string;
  bid: number;
  ask: number;
  updatedTime: string;
}

export const CoinInfoRow: FC<CoinInfoRowProps> = ({ name, code, bid, ask }) => {
  const history = useHistory();

  const viewCoinDetail = (code: string) => {
    const completedPath = mapParams(AppRoutes.COIN_DETAILS, {
      coinCode: code,
    });
    history.push(completedPath);
  };

  return (
    <Container>
      <CoinInfoContainer>
        <ColumnDirection>
          <CoinName>{name}</CoinName>
          <CoinCode>{code}</CoinCode>
        </ColumnDirection>
        <ColumnDirection>
          <Price>
            Bid: <strong>{bid}</strong>
          </Price>
          <Price style={{ marginTop: "8px" }}>
            Ask: <strong>{ask}</strong>
          </Price>
        </ColumnDirection>
      </CoinInfoContainer>
      <CtaContainer>
        <Button
          type="primary"
          size="small"
          onClick={() => viewCoinDetail(code)}
        >
          View Detail
        </Button>
      </CtaContainer>
    </Container>
  );
};
