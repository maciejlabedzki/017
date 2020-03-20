import React from "react";
import axios from "axios";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      removeUserID: undefined,
      removed: false,
      removedError: undefined,
      url: process.env.REACT_APP_REGISTER_USER,
      user: {
        key: Date.now(),
        name: "",
        lastName: "",
        mail: "",
        password: ""
      }
    };
  }

  jsonApiGet = async () => {
    await axios.get(this.state.url).then(response => {
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
    });
  };

  jsonApiPost = async () => {
    await axios
      .post(this.state.url, this.state.user)
      .then(function(response) {
        console.log("data", response.data);
        console.log("status", response.status);
        console.log("statusText", response.statusText);
        console.log("headers", response.headers);
        console.log("config", response.config);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  jsonApiPut = async () => {
    let posts = {
      title: "json-server22"
    };
    await axios
      .put("http://localhost:3333/posts/3", posts)
      .then(function(response) {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
      });
  };

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

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    let user = {
      key: Date.now(),
      name: data.get("name"),
      lastName: data.get("lastName"),
      mail: data.get("mail"),
      password: data.get("password")
    };

    this.setState({ user }, () => {
      this.jsonApiPost();
    });
  };

  setRemoveUserID = e => {
    e.preventDefault();
    let form = e.target;
    let data = new FormData(form);
    this.setState({ removeUserID: data.get("removeID") }, () => {
      this.jsonApiDel();
    });
  };

  showState = () => {
    console.log(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <div className="app_container">
          Register <button onClick={this.showState}>Show State</button>
          <form className="app_form" onSubmit={this.handleSubmit}>
            <div className="input_container">
              <label>Name:</label>
              <input
                name="name"
                placeholder="Name"
                type="text"
                pattern="[a-zA-Z]+"
                required
              ></input>
            </div>
            <div className="input_container">
              <label>Last Name:</label>
              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                pattern="[a-zA-Z]+"
                required
              ></input>
            </div>
            <div className="input_container">
              <label>Email:</label>
              <input
                name="mail"
                type="email"
                placeholder="email"
                required
              ></input>
            </div>
            <div className="input_container">
              <label>Password:</label>
              <input
                name="password"
                type="password"
                placeholder="password"
                required
              ></input>
            </div>
            <input type="submit" value="submit"></input>
          </form>
          <p>
            <button onClick={this.jsonApiGet}>Get</button>
          </p>
          <p>
            <button onClick={this.jsonApiPost}>post</button>
          </p>
          <p></p>
          <p>
            <button onClick={this.jsonApiPut}>put</button>
          </p>
          <div className="form-message">{this.state.message}</div>
          <form onSubmit={this.setRemoveUserID}>
            Remove User ID:
            <input
              name="removeID"
              type="number"
              placeholder="User ID to remove"
            />
            <input type="submit" value="Submit" pattern="" />
            {this.state.removeUserID === undefined && (
              <div className="alert-warning">No user ID</div>
            )}
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

export default Register;
