import React from "react";

const ToolDeveloper = ({ state }) => {
  let showState = () => {
    console.log(state);
  };

  return (
    <div className="app_tool_developers app_container">
      <button onClick={showState}>State</button>
    </div>
  );
};

export default ToolDeveloper;
