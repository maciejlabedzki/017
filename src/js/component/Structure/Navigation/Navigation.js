import React from "react";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div className="app_container app_navigation">
        <ul>
          {this.props.pagesList.map(item => {
            var link = "/" + item;
            return (
              <li name={item}>
                <Link to={link} name={item} onClick={this.props.changePage}>
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Navigation;
