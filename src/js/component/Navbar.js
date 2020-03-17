import React from "react";

class NavBar extends React.Component {
  buildList = () => {
    let list = this.props.pagesList;
    let wrapper = [];
    let counter = 0;
    list.map(item => {
      let randomkey = "id_navbar_" + counter;
      wrapper.push(
        <li name={item} key={randomkey} onClick={this.props.changePage}>
          {item}
        </li>
      );
      counter++;
    });

    return <ul>{wrapper}</ul>;
  };

  render() {
    return (
      <>
        <div className="app_container navbar" date-page={this.props.page}>
          {this.buildList()}
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
