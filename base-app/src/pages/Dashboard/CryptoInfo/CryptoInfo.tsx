import { CommonMfeProps, MfeName, MfePort } from "@anhthi-deep-dive/fe_rollup";
import { useLocation } from "react-router-dom";
import { mfeLoader } from "src/hooks/mfeLoader";

export const CryptoInfo = () => {
  const { pathname } = useLocation();
  const CryptoInfoMfe = mfeLoader<CommonMfeProps>({
    remoteUrl: `http://localhost:${MfePort.CRYPTO_INFO}/remoteEntry.js`,
    mfeName: MfeName.CRYPTO_INFO,
    moduleName: "./App",
  });

  return <CryptoInfoMfe basePath={pathname} />;
};
