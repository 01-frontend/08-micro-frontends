import { ComponentType, lazy, useEffect, useMemo, useState } from "react";
import { useDynamicScript } from "./useDynamicScript";

type UseFederationCompArgs = {
  remoteUrl: string;
  scope: string;
  module: string;
};

const loadComponent = (scope: string, module: string) => {
  return async () => {
    // @ts-ignore
    await __webpack_init_sharing__("default");
    const container = window[scope];
    // @ts-ignore
    await container.init(__webpack_share_scopes__.default);
    const factory = await window[scope].get(module);
    const Module = factory();
    return Module;
  };
};

export const useFederatedComp = <CompType,>({
  remoteUrl,
  scope,
  module,
}: UseFederationCompArgs) => {
  const [component, setComponent] = useState<ComponentType<CompType> | null>();

  const timestampRemoteUrl = useMemo(() => {
    const url = new URL(remoteUrl);
    url.searchParams.set("v", Date.now().toString());
    return url.toString();
  }, [remoteUrl]);

  const { isReady, isLoading, hasError } = useDynamicScript(timestampRemoteUrl);

  useEffect(() => {
    if (hasError) {
      setComponent(null);
      throw new Error(
        `Failed to load the module ${module} with url ${remoteUrl}`
      );
    }
  }, [hasError]);

  const InfComp = useMemo(() => {
    return lazy(() => {
      return new Promise<{ default: ComponentType<unknown> }>((res) => {
        setTimeout(() => {
          res({ default: () => null });
        }, 3000);
      });
    });
  }, [isLoading]);

  useEffect(() => {
    if (isLoading) {
      setComponent(InfComp);
    }
  }, [isLoading]);

  useEffect(() => {
    if (isReady) {
      const component = lazy(loadComponent(scope, module));
      setComponent(component);
    }
  }, [isReady]);

  return {
    hasError,
    component,
  };
};
