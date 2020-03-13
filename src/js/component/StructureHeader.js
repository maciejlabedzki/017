import React from "react";

class StructureAppHeader extends React.Component {
  render() {
    return (
      <>
        <div className="app_header_wrapper app_container">
          <div className="ahw_logo">MovieStorage.com</div>
          <div className="ahw_login">
            <div>
              <label>Login:</label>
              <input />
            </div>
            <div>
              <label>Password:</label>
              <input />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default StructureAppHeader;
