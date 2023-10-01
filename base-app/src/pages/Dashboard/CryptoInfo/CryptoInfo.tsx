import { Suspense } from "react";

import { useLocation } from "react-router-dom";
import { MfeName, MfePort } from "shared-lib/dist/common/constants";
import { CommonMfeProps } from "shared-lib/dist/common/types";
// import { CommonMfeProps } from "shared-lib/dist/common/types";
// import { mfeLoader } from "shared-lib/dist/hooks/mfeLoader";
import { useFederatedComp } from "src/hooks/useFederationComp";

export const CryptoInfo = () => {
  const { pathname } = useLocation();
  // const CryptoInfoMfe = mfeLoader<CommonMfeProps>({
  //   remoteUrl: `http://localhost:${MfePort.CRYPTO_INFO}/remoteEntry.js`,
  //   mfeName: MfeName.CRYPTO_INFO,
  //   moduleName: "./App",
  // });

  // return <CryptoInfoMfe basePath={pathname} />;

  const { Component } = useFederatedComp<CommonMfeProps>({
    remoteUrl: `http://localhost:${MfePort.CRYPTO_INFO}/remoteEntry.js`,
    scope: MfeName.CRYPTO_INFO,
    module: "./App",
  });

  return (
    <Suspense fallback={<p>Suspense Loading...</p>}>
      {Component && <Component basePath={pathname} />}
    </Suspense>
  );
};
