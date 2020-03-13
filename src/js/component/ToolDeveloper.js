import React from "react";

const ToolDeveloper = props => {
  let showState = () => {
    console.log(props);
  };

  return (
    <div className="app_tool_developers app_container">
      <button onClick={showState}>State</button>
    </div>
  );
};

export default ToolDeveloper;
