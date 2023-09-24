import { MfeName, MfePort } from "shared-lib/dist/common/constants";
import { mfeLoader } from "shared-lib/dist/hooks/mfeLoader";

export const CryptoInfo = () => {
  return mfeLoader({
    remoteUrl: `http://localhost:${MfePort.CRYPTO_INFO}/remoteEntry.js`,
    mfeName: MfeName.CRYPTO_INFO,
    moduleName: "./App",
  });
};
