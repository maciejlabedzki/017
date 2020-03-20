import React from "react";
import Axios from "axios";

class Register extends React.Component {
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

  jsonApiDel = async () => {
    await Axios.delete("http://localhost:3333/user/a1");
  };
  render() {
    return (
      <React.Fragment>
        <div className="app_container">
          Register
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
