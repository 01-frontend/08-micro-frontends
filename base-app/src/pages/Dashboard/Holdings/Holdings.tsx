import { MfeName, MfePort } from "shared-lib/dist/common/constants";
import { mfeLoader } from "shared-lib/dist/hooks/mfeLoader";

export const Holdings = () => {
  return mfeLoader({
    remoteUrl: `http://localhost:${MfePort.HOLDINGS}/remote-entry.js`,
    mfeName: MfeName.HOLDINGS,
    moduleName: "./App",
  });
};
