import React from "react";
import logo from "../../../../assets/img/logo.png";
import Login from "../../module/Login/Login";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="app-container app-container__header">
        <div className="app-container__header--logo">
          <Link to={this.props.pathName}>
            <img alt="logo" src={logo} />
          </Link>
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
