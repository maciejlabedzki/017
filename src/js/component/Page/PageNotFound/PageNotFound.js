import React from "react";

const PageNotFound = props => {
  return (
    <React.Fragment>
      <div className="app-container app-page-not-found">
        <span className="icon-warning"></span>
        <p>404 </p>
        <p>This adress is no longer with us.</p>
      </div>
    </React.Fragment>
  );
};

export default PageNotFound;
