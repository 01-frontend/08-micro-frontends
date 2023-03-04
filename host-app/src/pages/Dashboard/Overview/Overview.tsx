import { Suspense } from "react";
import { useFederatedComp } from "src/hooks/useFederationComp";

export const Overview = () => {
  const { Component, isScriptLoading, hasScriptError } = useFederatedComp({
    remoteUrl: "http://localhost:3001/remote-entry.js",
    module: "./Overview",
    scope: "overview",
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
