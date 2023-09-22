const getDynamicRemoteUrl = (remoteUrl: string): string => {
  const url = new URL(remoteUrl);
  url.searchParams.set("v", Date.now().toString());
  return url.toString();
};

export const loadMfeScript = (mfeName: string, remoteUrl: string) =>
  new Promise((resolve, reject) => {
    const onLoad = async () => {
      await window[mfeName].init(__webpack_share_scopes__.default);
      resolve(`Init ${mfeName} MFE success`);
    };

    const onError = () => {
      reject(`Load ${mfeName} MFE failed`);
    };

    (async () => {
      await __webpack_init_sharing__("default");
      const existedMfeScript = document.querySelector(
        `[data-mfe="${mfeName}"]`
      ) as HTMLScriptElement;

      if (existedMfeScript) {
        existedMfeScript.onload = onLoad;
        existedMfeScript.onerror = onError;
      } else {
        const initScript = document.createElement("script");
        initScript.setAttribute("data-mfe", mfeName);
        initScript.type = "text/javascript";
        initScript.src = getDynamicRemoteUrl(remoteUrl);
        initScript.async = true;
        initScript.onload = onLoad;
        initScript.onerror = onError;

        document.head.appendChild(initScript);
      }
    })();
  });
