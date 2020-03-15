import React from "react";
import logo from "../../assets/img/logo.png";

class StructureAppHeader extends React.Component {
  render() {
    return (
      <>
        <div className="app_header_wrapper app_container">
          <div className="ahw_logo">
            <img alt="logo" src={logo} />
          </div>
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
