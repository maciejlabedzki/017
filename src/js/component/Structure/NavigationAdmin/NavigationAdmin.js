import React from "react";

class NavigationAdmin extends React.Component {
  render() {
    return (
      <div className="app_container app_navigation app_logged app_admin">
        <ul>
          {this.props.pagesListAdmin.map(item => {
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

export default NavigationAdmin;
