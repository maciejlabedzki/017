import React from "react";

const BuildList = props => {
  let wrapper = [];
  this.props.pagesList.map(item => {
    wrapper.push(
      <li name={item} key={"id_navbar_" + item} onClick={this.props.changePage}>
        {item}
      </li>
    );
  });

  return wrapper;
};

class NavBar extends React.Component {
  render() {
    return (
      <>
        <div className="app_container navbar" date-page={this.props.page}>
          <ul>
            <BuildList />
          </ul>
          {/* <ul>
            <li name="home" onClick={this.props.changePage}>
              home
            </li>
            <li name="search" onClick={this.props.changePage}>
              search
            </li>
            <li name="user page" onClick={this.props.changePage}>
              user page
            </li>
            <li name="favourite" onClick={this.props.changePage}>
              user favourite
            </li>
            <li name="register" onClick={this.props.changePage}>
              register
            </li>
            <li name="contact" onClick={this.props.changePage}>
              contact
            </li>
          </ul> */}
        </div>
      </>
    );
  }
}

export default NavBar;
