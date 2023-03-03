import { useEffect, useState } from "react";

const urlsCache = new Set<string>();

export const useDynamicScript = (url: string) => {
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (!url) {
    return;
  }

  useEffect(() => {
    if (urlsCache.has(url)) {
      setIsReady(true);
      setIsLoading(false);
      setHasError(false);
      return;
    }

    setIsReady(false);
    setIsLoading(true);
    setHasError(false);

    const scriptElement = document.createElement("script");
    scriptElement.src = url;
    scriptElement.async = true;
    scriptElement.type = "text/javascript";

    scriptElement.onload = () => {
      urlsCache.add(url);
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
      urlsCache.delete(url);
      document.head.removeChild(scriptElement);
    };
  }, [url]);

  return { isReady, isLoading, hasError };
};
