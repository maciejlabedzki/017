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
        id: "",
        registryDate: Date.now(),
        name: "",
        lastName: "",
        mail: "",
        password: "",
        favourites: undefined,
        accessLv: "user"
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
        this.setState({
          send: true,
          error: undefined,
          message: response.statusText
        });
      })
      .catch(error => {
        if (
          error.toJSON()["message"] === "Request failed with status code 500"
        ) {
          this.setState({
            message: undefined,
            error: "This email was already used."
          });
        } else {
          this.setState({
            message: undefined,
            error: error.toJSON()["message"]
          });
        }
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    let user = {
      id: data.get("mail"),
      registryDate: Date.now(),
      name: data.get("name"),
      lastName: data.get("lastName"),
      mail: data.get("mail"),
      password: data.get("password"),
      accessLv: "user"
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
          Register
          {/* <button onClick={this.showState}>Show State</button> */}
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
                    minLength="8"
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
                {/* {this.state.message}.  */}
                <p>
                  Welcome{" "}
                  <strong>
                    {this.state.user.name} {this.state.user.lastName}
                  </strong>{" "}
                  .{" "}
                </p>
                <p>Your account was created.</p>
                <p>
                  To login use your email adress:{" "}
                  <strong>{this.state.user.mail}</strong>
                </p>
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
