import React from "react";

class Navigation extends React.Component {
  render() {
    return (
      <div className="app_container navbar" date-page={this.props.page}>
        <ul>
          {this.props.pagesList.map(item => {
            return (
              <li
                name={item}
                key={"id_navbar_" + item}
                onClick={this.props.changePage}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Navigation;
