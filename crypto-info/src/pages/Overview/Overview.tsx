import { Button } from "@anhthi-projects/usy-ui";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Overview = () => {
  const history = useHistory();

  const redirectToBTC = () => {
    history.push(`/coin-details/btc`);
  };

  return (
    <Container>
      <p>This is the Crypto Info - Overview</p>
      <Button type="primary" onClick={redirectToBTC}>
        View BTC details
      </Button>
    </Container>
  );
};
