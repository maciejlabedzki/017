import React from "react";

const ValidJson = props => {
  if (
    props === undefined ||
    props === "" ||
    props === [] ||
    typeof props !== "object"
  ) {
    return false;
  }

  for (var key in props) {
    if (props.hasOwnProperty(key)) {
      return true;
    }
  }
  return false;
};

export default ValidJson;
