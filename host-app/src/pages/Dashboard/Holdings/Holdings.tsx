import { Suspense } from "react";
import { useFederatedComp } from "src/hooks/useFederationComp";

export const Holdings = () => {
  const { component: HoldingsMFE } = useFederatedComp({
    remoteUrl: "http://localhost:3002/remote-entry.js",
    module: "./Holdings",
    scope: "holdings",
  });

  return (
    <Suspense fallback={<p>Loading...</p>}>
      {HoldingsMFE ? <HoldingsMFE /> : null}
    </Suspense>
  );
};
