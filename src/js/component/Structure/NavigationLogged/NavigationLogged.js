import React from "react";

class NavigationLogged extends React.Component {
  render() {
    return (
      <div className="app_container app_navigation app_logged">
        <ul>
          <li>Logged:</li>
          {this.props.pagesListLogged.map(item => {
            return (
              <li
                name={item}
                key={"id_navbar_logged_" + item}
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

export default NavigationLogged;
