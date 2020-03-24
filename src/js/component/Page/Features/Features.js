import React from "react";

import StarRating from "./../../../util/features/starRating";
import Tooltip from "./../../../util/features/tooltip";
import Loader from "./../../../util/features/loader";

class StructureTemplete extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="app-container">
          <h1>1 ) Stars </h1>
          <StarRating />

          <hr></hr>
          <h1>2 ) Tooltip </h1>

          <Tooltip text="Simple tooltip">
            <button className="app-button">Hover me!</button>
          </Tooltip>
          <hr></hr>
          <h1>3 ) Loader </h1>
          <Loader size={24} />
        </div>
      </React.Fragment>
    );
  }
}

export default StructureTemplete;
