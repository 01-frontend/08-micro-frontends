import { Suspense } from "react";

import { MfeName, MfePort, CommonMfeProps } from "@anhthi-deep-dive/fe_rollup";
import { useLocation } from "react-router-dom";
import { useFederatedComp } from "src/hooks/useFederatedComp";

export const Holdings = () => {
  const { pathname } = useLocation();
  const { Component } = useFederatedComp<CommonMfeProps>({
    remoteUrl: `http://localhost:${MfePort.HOLDINGS}/remoteEntry.js`,
    scope: MfeName.HOLDINGS,
    module: "./App",
  });

  return (
    <Suspense fallback={<p>Suspense Loading...</p>}>
      {Component && <Component basePath={pathname} />}
    </Suspense>
  );
};
