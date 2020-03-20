import React from "react";

const Helper = ({ state, offlineJson }) => {
  let showState = () => {
    console.log(state);
  };

  let showProcess = () => {
    console.log(process.env);
  };

  return (
    <div className="app_container app_developer">
      DEVTOOL:
      <button onClick={showState}>State</button>
      <button onClick={showProcess}>showProcess</button>
    </div>
  );
};

export default Helper;
