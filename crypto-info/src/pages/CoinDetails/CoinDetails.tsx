import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CoinDetails = () => {
  const { coinCode } = useParams<{ coinCode: string }>();

  return (
    <Container>
      <p>
        This is the Crypto Info - <strong>{coinCode}</strong> Coin Details
      </p>
    </Container>
  );
};
