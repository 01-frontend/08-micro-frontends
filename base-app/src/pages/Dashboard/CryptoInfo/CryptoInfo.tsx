import { Suspense } from "react";

import { MfeName } from "shared-lib/common/constants";
import { useFederatedComp } from "src/hooks/useFederationComp";

export const CryptoInfo = () => {
  const { Component, isScriptLoading, hasScriptError } = useFederatedComp({
    remoteUrl: "http://localhost:3001/remote-entry.js",
    module: "./CryptoInfo",
    scope: MfeName.CRYPTO_INFO,
  });

  if (isScriptLoading) {
    return <p>Script loading...</p>;
  }

  if (hasScriptError) {
    return <p>Script has error</p>;
  }

  return (
    <Suspense fallback={<p>Suspense Loading...</p>}>
      {Component && <Component />}
    </Suspense>
  );
};
