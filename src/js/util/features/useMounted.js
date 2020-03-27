import React from "react";

const useComponentDidMount = onMountHandler => {
  React.useEffect(() => {
    onMountHandler();
  }, [onMountHandler]);
};

const Mounter = () => {
  useComponentDidMount(() => console.log("Component did mount"));

  return <div>Check the console!</div>;
};

export default Mounter;
