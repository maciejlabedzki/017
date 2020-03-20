import React from "react";
import axios from "axios";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
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
    await axios.get("http://localhost:3333/results").then(response => {
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
    });
  };

  jsonApiPost = async () => {
    let user = this.state.user;
    await axios
      .post("http://localhost:3333/user", { user })
      .then(function(response) {
        // console.log("data", response.data);
        // console.log("status", response.status);
        // console.log("statusText", response.statusText);
        // console.log("headers", response.headers);
        // console.log("config", response.config);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  jsonApiPut = async () => {
    await axios
      .put("http://localhost:3333/user/1", { name: 222 })
      .then(function(response) {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
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
      password: data.get("password")
    };

    this.setState({ user });
    // console.log(form, data, data.get("name"));
    // for (let name of data.keys()) {
    //   console.log(data.get(name));
    //   //this.setState({ name: })
    //   // const input = form.elements[name];
    //   // const parserName = input.dataset.parse;

    //   // if (parserName) {
    //   //   const parser = inputParsers[parserName];
    //   //   const parsedValue = parser(data.get(name));
    //   //   data.set(name, );
    //   // }
    // }
    // console.log("name", data);
  };

  updateInputs = e => {
    this.setState({});
  };

  jsonApiDel = async () => {
    await axios.delete("http://localhost:3333/user/a1");
  };

  componentDidMount() {}

  show = () => {
    console.log(this.state);
    console.log(global);
  };

  render() {
    return (
      <React.Fragment>
        <div className="app_container">
          Register
          <button onClick={this.show}>Test</button>
          <form onSubmit={this.handleSubmit}>
            <div className="input_container">
              <label>Name:</label>
              <input
                name="name"
                placeholder="Name"
                onChange={this.updateInputs}
                required
              ></input>
            </div>
            <div className="input_container">
              <label>Last Name:</label>
              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
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
          <p>
            <button onClick={this.jsonApiDel}>del</button>
          </p>
          <p>
            <button onClick={this.jsonApiPut}>put</button>
          </p>
          <div className="form-message">{this.state.message}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
