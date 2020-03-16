import React from "react";

const ToolDeveloper = ({ state, offlineJson }) => {
  let showState = () => {
    console.log(state);
  };

  let offline = () => {
    offlineJson = false;
  };

  return (
    <div className="app_tool_developers app_container">
      <button onClick={showState}>State</button>
      <button onClick={offline}>offlineJson</button>
    </div>
  );
};

export default ToolDeveloper;
