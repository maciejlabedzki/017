import React from "react";
import axios from "axios";

class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      removeUserID: undefined,
      removed: false,
      removedError: undefined,
      url: process.env.REACT_APP_REGISTER_USER,
      patternInputs:
        "[AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŹźŻż]+",
      user: {
        key: Date.now(),
        name: "",
        lastName: "",
        mail: "",
        password: "",
        id: ""
      }
    };
  }

  jsonApiDel = async id => {
    // Information
    // {
    //   "user": {
    //     "key": 1584700360498,
    //     "name": "3",
    //     "lastName": "4",
    //     "mail": "bedzki@wp.pl",
    //     "password": "a"
    //   },
    //   "id": 3 // <= THIS NUMBER IS FOR URL .../user/3
    // },
    if (this.state.removeUserID !== "") {
      await axios
        .delete(
          process.env.REACT_APP_REGISTER_USER + "/" + this.state.removeUserID
        )
        .then(response => {
          this.setState({ removed: true, removedError: undefined });
        })
        .catch(error => {
          console.log(error.toJSON());
          let errorStorage = error.toJSON();
          this.setState({
            removed: false,
            removedError: errorStorage["message"]
          });
        });
    } else {
      console.log("No user id");
    }
  };

  setRemoveUserID = e => {
    e.preventDefault();
    let form = e.target;
    let data = new FormData(form);
    this.setState({ removeUserID: data.get("removeID") }, () => {
      this.jsonApiDel();
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="app_container">
          Delete ID User:
          <form onSubmit={this.setRemoveUserID}>
            Delete User ID:
            <input
              name="removeID"
              type="email"
              placeholder="User ID to remove"
            />
            <input type="submit" value="Submit" pattern="" />
            {/* {this.state.removeUserID === undefined && (
              <div className="alert-warning">No user ID</div>
            )} */}
            {this.state.removeUserID !== undefined && (
              <div className="alert-success">
                User ID was set to: {this.state.removeUserID}
              </div>
            )}
            {this.state.removed === true && (
              <div className="alert-success">
                User ID: {this.state.removeUserID} was deleted
              </div>
            )}
            {this.state.removedError !== undefined && (
              <div className="alert-warning">{this.state.removedError}</div>
            )}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Delete;
