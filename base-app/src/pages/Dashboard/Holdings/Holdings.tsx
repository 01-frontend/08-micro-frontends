import { useLocation } from "react-router-dom";
import { MfeName, MfePort } from "shared-lib/dist/common/constants";
import { CommonMfeProps } from "shared-lib/dist/common/types";
import { mfeLoader } from "shared-lib/dist/hooks/mfeLoader";

export const Holdings = () => {
  const { pathname } = useLocation();
  const HoldingsMfe = mfeLoader<CommonMfeProps>({
    remoteUrl: `http://localhost:${MfePort.HOLDINGS}/remoteEntry.js`,
    mfeName: MfeName.HOLDINGS,
    moduleName: "./App",
  });

  return <HoldingsMfe basePath={pathname} />;
};
