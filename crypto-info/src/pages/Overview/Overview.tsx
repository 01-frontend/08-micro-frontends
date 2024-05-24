import { Drawer, DrawerContent, DrawerHeader } from "@anhthi-projects/usy-ui";
import { Route, useHistory } from "react-router-dom";
import { AppRoutes } from "src/common/constants";
import { coinData } from "src/data/coinData";

import { CoinDetails } from "./CoinDetails";
import { CoinInfoRow } from "./CoinInfoRow";
import { Container } from "./Overview.styled";

export const Overview = () => {
  const history = useHistory();

  const handleDrawerClose = () => {
    history.goBack();
  };

  return (
    <Container>
      {coinData.map(({ name, code, bid, ask, updatedTime }) => (
        <CoinInfoRow
          key={code}
          name={name}
          code={code}
          bid={bid}
          ask={ask}
          updatedTime={updatedTime}
        />
      ))}
      <Route path={AppRoutes.COIN_DETAILS}>
        <Drawer
          header={
            <DrawerHeader title="Coin Details" onClose={handleDrawerClose} />
          }
          isOpen
        >
          <DrawerContent>
            <CoinDetails />
          </DrawerContent>
        </Drawer>
      </Route>
    </Container>
  );
};
