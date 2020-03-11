import React from "react";
import axios from "axios";
import "./css/App.css";
import "./css/App_theme.css";
import jsonOffline from "./data/movieData.js";
import MovieStatic from "./js/MovieStatic";
import dotenv from "dotenv";

const myEnv = dotenv.config({ path: "/123123.env" });

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      json: jsonOffline,
      jsonValid: true,
      input: "Thor",
      movieFound: true // True or false
    };
    console.log("PROCESS TEST", myEnv, dotenv, process, process.env);
  }

  validJson = () => {
    const jsonToValidate = this.state.json;
    let jsonValid = false;
    for (var key in jsonToValidate) {
      if (jsonToValidate.hasOwnProperty(key)) {
        jsonValid = true;
      }
    }
    this.setState({ jsonValid });
  };

  jsonApi = async () => {
    const response = await axios.get(
      "https://www.omdbapi.com/?t=" + this.state.input + "&apikey=46409146"
    );
    if (response.data.Response) {
      this.setState(
        {
          json: response.data,
          movieFound: true
        },
        () => {}
      );

      this.validJson();
    } else {
      this.setState({ movieFound: false });
    }
  };

  updateInput = e => {
    this.setState({
      input: e.target.value
    });
  };

  render() {
    return (
      <div>
        <input defaultValue={this.state.input} onChange={this.updateInput} />
        <p>
          <button onClick={this.jsonApi}>OMDB Api</button>
        </p>
        {this.state.movieFound === false && (
          <div className="error">Movie: "{this.state.input}" was not found</div>
        )}
        {this.state.movieFound === true && this.state.jsonValid === true && (
          <MovieStatic dataJson={this.state.json} />
        )}
      </div>
    );
  }
}

export default App;
