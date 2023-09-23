import { MfeName, MfePort } from "shared-lib/dist/common/constants";
import { mfeLoader } from "shared-lib/dist/hooks/mfeLoader";

export const OrderMgt = () => {
  return mfeLoader({
    remoteUrl: `http://localhost:${MfePort.ORDER_MGT}/remoteEntry.js`,
    mfeName: MfeName.ORDER_MGT,
    moduleName: "./App",
  });
};
