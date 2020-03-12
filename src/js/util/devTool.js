import React from "react";

const DevTool = props => {
  let showState = () => {
    console.log(props);
  };

  return <button onClick={showState}>State</button>;
};

export default DevTool;
