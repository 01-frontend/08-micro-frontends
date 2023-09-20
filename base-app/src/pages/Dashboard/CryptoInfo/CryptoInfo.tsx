import { Suspense } from "react";

import { MfeName, MfePort } from "shared-lib/dist/common/constants";
import { Foo } from "shared-lib/dist/components";
import { useFederatedComp } from "src/hooks/useFederationComp";

export const CryptoInfo = () => {
  const { Component, isScriptLoading, hasScriptError } = useFederatedComp({
    remoteUrl: `http://localhost:${MfePort.CRYPTO_INFO}/remote-entry.js`,
    module: "./App",
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
      <Foo />
    </Suspense>
  );
};
