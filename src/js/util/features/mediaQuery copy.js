import React from "react";

const useMediaQuery = (query, whenTrue, whenFalse) => {
  if (typeof window === "undefined" || typeof window.matchMedia === "undefined")
    return whenFalse;

  const mediaQuery = window.matchMedia(query);
  const [match, setMatch] = React.useState(!!mediaQuery.matches);

  React.useEffect(() => {
    const handler = () => setMatch(!!mediaQuery.matches);
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }, []);

  return match ? whenTrue : whenFalse;
};

const ResponsiveText = () => {
  const text = useMediaQuery(
    "(max-width: 400px)",
    "Less than 400px wide",
    "More than 400px wide"
  );

  return <span>{text}</span>;
};

export default ResponsiveText;

// Line 8:29:  React Hook "React.useState" is called conditionally. React Hooks must be called in the exact same order in every component render. Did you accidentally call a React Hook after an early return?
