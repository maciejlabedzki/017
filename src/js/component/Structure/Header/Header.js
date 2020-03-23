import React from "react";
import logo from "../../../../assets/img/logo.png";
import Login from "../../module/Login/Login";

class Header extends React.Component {
  render() {
    return (
      <div className="app_container app_header">
        <div className="ahw_logo">
          <img alt="logo" src={logo} />
        </div>
        <Login
          updateFavourites={this.props.updateFavourites}
          logOut={this.props.logOut}
          userDataLogin={this.props.userDataLogin}
          signIn={this.props.signIn}
          loginStatus={this.props.loginStatus}
        />
      </div>
    );
  }
}

export default Header;
