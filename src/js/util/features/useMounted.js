import React from "react";

const useComponentDidMount = onMountHandler => {
  React.useEffect(() => {
    onMountHandler();
  }, []);
};

const Mounter = () => {
  useComponentDidMount(() => console.log("Component did mount"));

  return <div>Check the console!</div>;
};

export default Mounter;
