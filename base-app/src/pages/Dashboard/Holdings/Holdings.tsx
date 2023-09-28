import { MfeName, MfePort } from "shared-lib/dist/common/constants";
import { mfeLoader } from "shared-lib/dist/hooks/mfeLoader";

export const Holdings = () => {
  const BuildHoldings = mfeLoader({
    remoteUrl: `http://localhost:${MfePort.HOLDINGS}/remoteEntry.js`,
    mfeName: MfeName.HOLDINGS,
    moduleName: "./App",
  });

  return <BuildHoldings />;
};
