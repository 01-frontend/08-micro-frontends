import { Suspense } from "react";
import { useFederatedComp } from "src/hooks/useFederationComp";

export const Overview = () => {
  const { component: OverviewMFE, hasError } = useFederatedComp({
    remoteUrl: "http://localhost:3001/remote-entry.js",
    module: "./Overview",
    scope: "overview",
  });

  return (
    <Suspense fallback={<p>Loading...</p>}>
      {hasError ? <p>Something wrong...</p> : OverviewMFE && <OverviewMFE />}
    </Suspense>
  );
};
