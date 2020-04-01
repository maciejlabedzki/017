import React from "react";
import Axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: undefined,
      removeMessage: false,
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

  handleUserFavourite = async () => {
    var url = process.env.REACT_APP_REGISTER_FAVOURITES + "/" + this.state.user;

    await Axios.get(url)
      .then(response => {
        this.props.updateFavourites({
          favourites: response.data.movies
        });
      })
      .catch(error => {});
  };

  handleUserLogin = async () => {
    var url = process.env.REACT_APP_REGISTER_USER + "/" + this.state.user;

    await Axios.get(url)
      .then(response => {
        if (response.data.password === this.state.password) {
          this.setState({ message: undefined });
          this.props.signIn({
            user: this.state.user,
            password: this.state.password,
            userDataLogin: response.data,
            accessLv: response.data.accessLv
          });
          this.handleUserFavourite();
        } else if (response.data.password !== this.state.password) {
          this.setState({
            message: "Error: Wrong password",
            removeMessage: false
          });
          this.handleMessage();
        } else if (response.data.password === undefined) {
          this.setState({
            message: "Error: There is no password.",
            removeMessage: false
          });
          this.handleMessage();
        } else {
          this.handleMessage();
        }
      })
      .catch(error => {
        this.setState({ message: error.toJSON()["message"] });
      });
  };

  handleSubmit = event => {
    this.handleUserLogin();
    // this.props.signIn({
    //   user: this.state.user,
    //   password: this.state.password
    // });
    event.preventDefault();
  };

  handleLogOut = event => {
    this.setState({ user: "", password: "" });
    this.props.logOut();
    event.preventDefault();
  };

  handleMessage = event => {
    setTimeout(() => {
      this.setState({ removeMessage: true });
    }, 5000);
  };

  render() {
    return (
      <div className="app-container__header--login">
        {this.props.loginStatus === true && (
          <div className="userLogged">
            <label className="userLogged-greeting">Welcome</label>
            <label className="userLogged-accessLv">
              ({this.props.userDataLogin.accessLv})
            </label>
            <label className="userLogged-name">
              {this.props.userDataLogin.name}
            </label>
            <label className="userLogged-lastName">
              {this.props.userDataLogin.lastName}
            </label>
            <button
              className="app-button app-button--sign-out signOut"
              onClick={this.handleLogOut}
            >
              Logout
            </button>
          </div>
        )}

        {!this.props.loginStatus === true && (
          <form onSubmit={this.handleSubmit}>
            <div className="app-container__header-form--login login">
              <label>Login:</label>
              <input
                className="app-input__login"
                name="user"
                type="email"
                autoComplete="email"
                defaultValue={this.state.value}
                onChange={this.handleChangeUser}
              />
            </div>
            <div className="app-container__header-form--login login">
              <label>Password:</label>
              <input
                className="app-input__password"
                minLength="8"
                autoComplete="current-password"
                defaultValue={this.state.password}
                onChange={this.handleChangePassword}
              />
            </div>
            <input
              className="app-button app-input__submit"
              type="submit"
              value="Sign in"
            />
          </form>
        )}
        {this.state.message !== undefined &&
          this.state.removeMessage === false && (
            <div className="app_container__alert alert-danger   ">
              {this.state.message}
            </div>
          )}
      </div>
    );
  }
}

export default Login;
