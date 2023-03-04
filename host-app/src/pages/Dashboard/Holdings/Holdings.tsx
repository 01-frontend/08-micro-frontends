import { Suspense } from "react";
import { useFederatedComp } from "src/hooks/useFederationComp";

export const Holdings = () => {
  const { Component, isScriptLoading, hasScriptError } = useFederatedComp({
    remoteUrl: "http://localhost:3002/remote-entry.js",
    module: "./Holdings",
    scope: "holdings",
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
