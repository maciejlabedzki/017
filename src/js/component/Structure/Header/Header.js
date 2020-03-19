import React from "react";
import logo from "../../../../assets/img/logo.png";
import Login from "../../module/Login/Login";

class Header extends React.Component {
  render() {
    return (
      <div className="app_container app_header_wrapper">
        <div className="ahw_logo">
          <img alt="logo" src={logo} />
        </div>
        <Login
          logOut={this.props.logOut}
          userData={this.props.userData}
          signIn={this.props.signIn}
          loginStatus={this.props.loginStatus}
        />
      </div>
    );
  }
}

export default Header;
