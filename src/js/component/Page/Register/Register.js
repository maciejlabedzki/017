import React from "react";
import axios from "axios";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: undefined,
      error: undefined,
      removeUserID: undefined,
      removed: false,
      removedError: undefined,
      send: false,
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

  jsonApiPost = async () => {
    await axios
      .post(this.state.url, this.state.user)
      .then(response => {
        console.log("data", response.data);
        console.log("status", response.status);
        console.log("statusText", response.statusText);
        console.log("headers", response.headers);
        console.log("config", response.config);
        this.setState({ send: true, message: response.statusText });
      })
      .catch(error => {
        console.log(error.toJSON());
        this.setState({ message: undefined, error: error.toJSON()["message"] });
      });
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
      id: data.get("mail"),
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
          {this.state.send === false && (
            <React.Fragment>
              <form className="app_form" onSubmit={this.handleSubmit}>
                <div className="input_container">
                  <label>
                    Name<span className="legend-required">*</span>:
                  </label>
                  <input
                    name="name"
                    placeholder="Name"
                    type="text"
                    pattern={this.state.patternInputs}
                    required
                  ></input>
                </div>
                <div className="input_container">
                  <label>
                    Last Name<span className="legend-required">*</span>:
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    pattern={this.state.patternInputs}
                    required
                  ></input>
                </div>
                <div className="input_container">
                  <label>
                    Email<span className="legend-required">*</span>:
                  </label>
                  <input
                    name="mail"
                    type="email"
                    autoComplete="email"
                    placeholder="email"
                    required
                  ></input>
                </div>
                <div className="input_container">
                  <label>
                    Password<span className="legend-required">*</span>:
                  </label>
                  <input
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Password"
                    required
                  ></input>
                </div>
                <input type="submit" value="Send"></input>
              </form>
            </React.Fragment>
          )}
          {this.state.message !== undefined && (
            <React.Fragment>
              <div className="app_container alert-success">
                {this.state.message}
              </div>
            </React.Fragment>
          )}
          {this.state.error !== undefined && (
            <React.Fragment>
              <div className="app_container alert-warning">
                {this.state.error}
              </div>
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
