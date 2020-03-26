import React from "react";

const isDOMavailable = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

const useSSR = (callback, delay) => {
  const [inBrowser, setInBrowser] = React.useState(isDOMavailable);

  React.useEffect(() => {
    setInBrowser(isDOMavailable);
    return () => {
      setInBrowser(false);
    };
  }, []);

  const useSSRObject = React.useMemo(
    () => ({
      isBrowser: inBrowser,
      isServer: !inBrowser,
      canUseWorkers: typeof Worker !== "undefined",
      canUseEventListeners: inBrowser && !!window.addEventListener,
      canUseViewport: inBrowser && !!window.screen
    }),
    [inBrowser]
  );

  return React.useMemo(
    () => Object.assign(Object.values(useSSRObject), useSSRObject),
    [inBrowser]
  );
};

const SSRChecker = props => {
  let { isBrowser, isServer } = useSSR();

  return <p>{isBrowser ? "Running on browser" : "Running on server"}</p>;
};

export default SSRChecker;
