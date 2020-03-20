import React from "react";
import Axios from "axios";

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
    await Axios.get("http://localhost:3333/results").then(function(response) {
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
    });
  };

  jsonApiPost = async () => {
    let user = { id: Math.random() };
    await Axios.post("http://localhost:3333/results", { user }).then(function(
      response
    ) {
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
    });
  };

  jsonApiPut = async () => {
    await Axios.put("http://localhost:3333/user/1", { name: 222 }).then(
      function(response) {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
      }
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    console.log(form, data, data.get("name"));
    for (let name of data.keys()) {
      console.log(data.get(name));
      //this.setState({ name: })
      // const input = form.elements[name];
      // const parserName = input.dataset.parse;

      // if (parserName) {
      //   const parser = inputParsers[parserName];
      //   const parsedValue = parser(data.get(name));
      //   data.set(name, );
      // }
    }
    console.log("name", data);
  };

  updateInputs = e => {
    this.setState({});
  };

  jsonApiDel = async () => {
    await Axios.delete("http://localhost:3333/user/a1");
  };
  render() {
    return (
      <React.Fragment>
        <div className="app_container">
          Register
          <form onSubmit={this.handleSubmit}>
            <div className="input_container">
              <label>Name:</label>
              <input
                name="name"
                defaultValue="Name"
                onChange={this.updateInputs}
              ></input>
            </div>
            <div className="input_container">
              <label>Last Name:</label>
              <input
                name="lastName"
                type="text"
                defaultValue="Last Name"
              ></input>
            </div>
            <div className="input_container">
              <label>Email:</label>
              <input name="mail" type="text" defaultValue="email"></input>
            </div>
            <div className="input_container">
              <label>Password:</label>
              <input
                name="password"
                type="password"
                defaultValue="email"
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
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
