import React from "react";
import axios from "axios";

class AllUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alluser: {},
      build: false,
      url: process.env.REACT_APP_REGISTER_USER
    };
  }

  jsonApiGet = async () => {
    await axios
      .get(this.state.url)
      .then(response => {
        this.setState({ alluser: response.data }, () => {
          this.setState({ build: true });
        });
      })
      .catch(error => {});
  };

  render() {
    return (
      <React.Fragment>
        <div className="app-container">
          <p>
            <button className="app-button" onClick={this.jsonApiGet}>
              Show All Users
            </button>
          </p>
          <div className="all_user_table">
            {this.state.build === true &&
              this.state.alluser.map(user => {
                return (
                  <div className="row" key={user["id"]}>
                    <div className="cell">
                      <label className="title">id:</label>
                      <label className="content">{user["id"]}</label>
                    </div>
                    <div className="cell">
                      <label className="title">Name:</label>
                      <label className="content">{user["name"]}</label>
                    </div>
                    <div className="cell">
                      <label className="title">lastName:</label>
                      <label className="content">{user["lastName"]}</label>
                    </div>
                    <div className="cell">
                      <label className="title">mail:</label>
                      <label className="content">{user["mail"]}</label>
                    </div>
                    <div className="cell">
                      <label className="title">password:</label>
                      <label className="content">{user["password"]}</label>
                    </div>
                    <div className="cell">
                      <label className="title">favourite:</label>
                      <label className="content">{user["favourite"]}</label>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AllUsers;
