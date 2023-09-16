import { useEffect, useMemo, useState } from "react";

const urlsCache = new Set<string>();

export const useDynamicScript = (remoteUrl: string) => {
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const dynamicRemoteUrl = useMemo(() => {
    const url = new URL(remoteUrl);
    url.searchParams.set("v", Date.now().toString()); // avoid cache
    return url.toString();
  }, [remoteUrl]);

  useEffect(() => {
    if (!remoteUrl) {
      return;
    }

    if (urlsCache.has(remoteUrl)) {
      setIsReady(true);
      setIsLoading(false);
      setHasError(false);
      return;
    }

    setIsReady(false);
    setIsLoading(true);
    setHasError(false);

    const scriptElement = document.createElement("script");
    scriptElement.src = dynamicRemoteUrl;
    scriptElement.async = true;
    scriptElement.type = "text/javascript";

    scriptElement.onload = () => {
      urlsCache.add(remoteUrl);
      setIsReady(true);
      setIsLoading(false);
    };

    scriptElement.onerror = () => {
      setIsReady(false);
      setIsLoading(false);
      setHasError(true);
    };

    document.head.appendChild(scriptElement);

    return () => {
      urlsCache.delete(remoteUrl);
      document.head.removeChild(scriptElement);
    };
  }, [remoteUrl]);

  return { isReady, isLoading, hasError };
};
