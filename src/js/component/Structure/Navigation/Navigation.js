import React from "react";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div className="app-container app-container__navigation">
        <ul>
          {this.props.pagesList.map(item => {
            var link = "/" + item;

            if (item === "register" && this.props.accessLv !== undefined) {
              return null;
            } else {
              return (
                <Link
                  key={"id_navbar_" + item}
                  to={link}
                  onClick={this.props.changePage}
                >
                  <li name={item} className="app-button app-button__navigation">
                    {item}
                  </li>
                </Link>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

export default Navigation;
