// import { Suspense } from "react";
// import { useHistory } from "react-router-dom";
import { MfeName, MfePort } from "shared-lib/dist/common/constants";
import { mfeLoader } from "shared-lib/dist/hooks/mfeLoader";
// import { useFederatedComp } from "src/hooks/useFederationComp";

export const CryptoInfo = () => {
  const BuildCryptoInfo = mfeLoader({
    remoteUrl: `http://localhost:${MfePort.CRYPTO_INFO}/remoteEntry.js`,
    mfeName: MfeName.CRYPTO_INFO,
    moduleName: "./App",
  });

  return <BuildCryptoInfo />;

  // console.log(`http://localhost:${MfePort.CRYPTO_INFO}/remoteEntry.js`);
  // const { Component } = useFederatedComp({
  //   remoteUrl: `http://localhost:${MfePort.CRYPTO_INFO}/remoteEntry.js`,
  //   scope: MfeName.CRYPTO_INFO,
  //   module: "./App",
  // });

  // return (
  //   <Suspense fallback={<p>Suspense Loading...</p>}>
  //     {Component && <Component />}
  //   </Suspense>
  // );
};
