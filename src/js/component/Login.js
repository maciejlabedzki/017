import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: ""
    };
  }

  handleChangeUser = event => {
    this.setState({ user: event.target.value });
  };

  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    this.props.signIn({
      user: this.state.user,
      password: this.state.password
    });
    event.preventDefault();
  };

  handleLogOut = event => {
    this.setState({ user: "", password: "" });
    this.props.logOut();
    event.preventDefault();
  };

  render() {
    return (
      <div className="ahw_login-wrapper">
        {this.props.loginStatus === true && (
          <div className="userLogged">
            Welcome
            <label className="userLogged-name">
              {this.props.userData.name}
            </label>
            <label className="userLogged-lastName">
              {this.props.userData.lastName}
            </label>
            <button className="signOut" onClick={this.handleLogOut}>
              Logout
            </button>
          </div>
        )}

        {!this.props.loginStatus === true && (
          <form onSubmit={this.handleSubmit}>
            <div className="login_wrapper login">
              <label>Login:</label>
              <input
                className="input_login"
                name="user"
                defaultValue={this.state.value}
                onChange={this.handleChangeUser}
              />
            </div>
            <div className="login_wrapper login">
              <label>Password:</label>
              <input
                className="input_password"
                defaultValue={this.state.password}
                onChange={this.handleChangePassword}
              />
            </div>
            <input type="submit" value="Sign in" />
          </form>
        )}
      </div>
    );
  }
}

export default Login;
