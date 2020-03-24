import React from "react";

import { Link } from "react-router-dom";

class NavigationAdmin extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.accessLv === "admin" && (
          <div className="app-container app-container__navigation app_logged app_admin">
            <ul>
              {this.props.pagesListAdmin.map(item => {
                var replaced = item.split(" ").join("_");
                var link = "/" + replaced;
                return (
                  <Link
                    key={"id_navbar_logged_" + item}
                    to={link}
                    onClick={this.props.changePage}
                  >
                    <li name={item} className="app-button">
                      {item}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default NavigationAdmin;
