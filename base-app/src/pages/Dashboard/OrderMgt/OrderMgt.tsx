import { Suspense } from "react";

import { MfeName, MfePort } from "shared-lib/dist/common/constants";
import { useFederatedComp } from "src/hooks/useFederationComp";

export const OrderMgt = () => {
  const { Component, isScriptLoading, hasScriptError } = useFederatedComp({
    remoteUrl: `http://localhost:${MfePort.ORDER_MGT}/remote-entry.js`,
    module: "./App",
    scope: MfeName.ORDER_MGT,
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
