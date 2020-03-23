import React from "react";

import { Link } from "react-router-dom";

class NavigationAdmin extends React.Component {
  render() {
    return (
      <div className="app_container app_navigation app_logged app_admin">
        <ul>
          {this.props.pagesListAdmin.map(item => {
            var replaced = item.split(" ").join("_");
            var link = "/" + replaced;
            return (
              <Link
                key={"id_navbar_logged_" + item}
                to={link}
                name={item}
                onClick={this.props.changePage}
              >
                <li>{item}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default NavigationAdmin;
