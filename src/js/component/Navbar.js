import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <>
        <div className="app_container navbar">
          <ul>
            <li name="home" onClick={this.props.changePage}>
              home
            </li>
            <li name="search" onClick={this.props.changePage}>
              search
            </li>
            <li name="user page" onClick={this.props.changePage}>
              user page
            </li>
            <li name="register" onClick={this.props.changePage}>
              register
            </li>
            <li name="contact" onClick={this.props.changePage}>
              contact
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default NavBar;
