import { Suspense } from "react";
import { useFederatedComp } from "src/hooks/useFederationComp";

export const Overview = () => {
  const { component: Component } = useFederatedComp({
    remoteUrl: "http://localhost:3001/remote-entry.js",
    module: "./Overview",
    scope: "overview",
  });

  return (
    <Suspense fallback={<p>Loading...</p>}>
      {Component ? <Component /> : null}
    </Suspense>
  );
};
