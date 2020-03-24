import React from "react";
import Axios from "axios";

const Register = props => {
  let jsonApiGet = async () => {
    await Axios.get("http://localhost:3333/results").then(function(response) {
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
    });
  };

  let jsonApiPost = async () => {
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

  let jsonApiPut = async () => {
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

  let jsonApiDel = async () => {
    await Axios.delete("http://localhost:3333/user/a1");
  };

  return (
    <React.Fragment>
      <div className="app-container">
        Register
        <p>
          <button className="app-button" onClick={jsonApiGet}>
            Get
          </button>
        </p>
        <p>
          <button className="app-button" onClick={jsonApiPost}>
            post
          </button>
        </p>
        <p>
          <button className="app-button" onClick={jsonApiDel}>
            del
          </button>
        </p>
        <p>
          <button className="app-button" onClick={jsonApiPut}>
            put
          </button>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Register;
