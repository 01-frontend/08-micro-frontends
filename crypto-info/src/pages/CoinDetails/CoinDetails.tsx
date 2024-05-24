import { Button } from "@anhthi-projects/usy-ui";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CoinDetails = () => {
  const history = useHistory();
  const { coinCode } = useParams<{ coinCode: string }>();

  const backToOverview = () => {
    history.goBack();
  };

  return (
    <Container>
      <p>
        This is the Crypto Info - <strong>{coinCode}</strong> Coin Details
      </p>
      <Button onClick={backToOverview}>Back</Button>
    </Container>
  );
};
