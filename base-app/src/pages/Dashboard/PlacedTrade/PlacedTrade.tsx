import { Drawer, DrawerContent, DrawerHeader } from "@anhthi-projects/usy-ui";
import { useHistory, useLocation } from "react-router-dom";
import {
  CommonMfeProps,
  MfeName,
  MfePort,
  mfeLoader,
} from "src/hooks/mfeLoader";
import { getMfePath } from "src/utils/helpers";

export const PlacedTrade = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const PlacedTradeMfe = mfeLoader<CommonMfeProps>({
    remoteUrl: `http://localhost:${MfePort.PLACED_TRADED}/remoteEntry.js`,
    mfeName: MfeName.PLACED_TRADED,
    moduleName: "./App",
  });

  return (
    <Drawer
      header={
        <DrawerHeader title="Placed Trade" onClose={() => history.goBack()} />
      }
      isOpen
    >
      <DrawerContent>
        <PlacedTradeMfe basePath={getMfePath(pathname)} baseHistory={history} />
      </DrawerContent>
    </Drawer>
  );
};
