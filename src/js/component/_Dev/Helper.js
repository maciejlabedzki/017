import React from "react";

const Helper = ({ state, offlineJson }) => {
  let showState = () => {
    console.log(state);
  };

  return (
    <div className="app_tool_developers app_container">
      DEVTOOL:
      <button onClick={showState}>State</button>
    </div>
  );
};

export default Helper;
