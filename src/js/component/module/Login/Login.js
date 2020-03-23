import React from "react";
import Axios from "axios";

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

  handleUserFavourite = async () => {
    console.log("TRY Fav ");

    var url = process.env.REACT_APP_REGISTER_FAVOURITES + "/" + this.state.user;

    await Axios.get(url)
      .then(response => {
        console.log("dadasdaddada", response);

        this.props.updateFavourites({
          favourites: response.data.movies
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleUserLogin = async () => {
    console.log("TRY  ");

    var url = process.env.REACT_APP_REGISTER_USER + "/" + this.state.user;

    await Axios.get(url)
      .then(response => {
        if (response.data.password === this.state.password) {
          this.props.signIn({
            user: this.state.user,
            password: this.state.password,
            userDataLogin: response.data,
            accessLv: response.data.accessLv
          });
          this.handleUserFavourite();
        }
        console.log("TRY LOGIN", response.data.password);
      })
      .catch(error => {
        console.log(error);
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

  componentDidMount() {
    console.log("test", this.props.userDataLogin);
  }

  render() {
    return (
      <div className="ahw_login-wrapper">
        {this.props.loginStatus === true && (
          <div className="userLogged">
            <label className="userLogged-greeting">Welcome</label>
            <label className="userLogged-name">
              {this.props.userDataLogin.name}
            </label>
            <label className="userLogged-lastName">
              {this.props.userDataLogin.lastName}
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
                type="email"
                defaultValue={this.state.value}
                onChange={this.handleChangeUser}
              />
            </div>
            <div className="login_wrapper login">
              <label>Password:</label>
              <input
                className="input_password"
                minLength="8"
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
