const getDynamicRemoteUrl = (remoteUrl: string): string => {
  const url = new URL(remoteUrl);
  url.searchParams.set("v", Date.now().toString());
  return url.toString();
};

export const loadMfeScript = (mfeName: string, remoteUrl: string) =>
  new Promise((resolve, reject) => {
    if (window[mfeName]) {
      resolve(`${mfeName} MFE was initialized before`);
    }

    const onLoad = async () => {
      // Initialize the container, it may provide shared modules
      await window[mfeName].init(__webpack_share_scopes__.default);
      resolve(`Load ${mfeName} MFE script success`);
    };

    const onError = () => {
      reject(`Load ${mfeName} MFE script failed`);
    };

    (async () => {
      // Initializes the shared scope. Fills it with known provided modules from this build and all remotes
      await __webpack_init_sharing__("default");
      const existedMfeScript = document.querySelector(
        `[data-mfe="${mfeName}"]`
      ) as HTMLScriptElement;

      if (!existedMfeScript) {
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
