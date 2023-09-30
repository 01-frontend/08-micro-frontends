import { useLocation } from "react-router-dom";
import { MfeName, MfePort } from "shared-lib/dist/common/constants";
import { CommonMfeProps } from "shared-lib/dist/common/types";
import { mfeLoader } from "shared-lib/dist/hooks/mfeLoader";

export const CryptoInfo = () => {
  const { pathname } = useLocation();
  const CryptoInfoMfe = mfeLoader<CommonMfeProps>({
    remoteUrl: `http://localhost:${MfePort.CRYPTO_INFO}/remoteEntry.js`,
    mfeName: MfeName.CRYPTO_INFO,
    moduleName: "./App",
  });

  return <CryptoInfoMfe basePath={pathname} />;
};
