import React from "react";
import axios from "axios";
import "./css/App.css";
import "./css/App_theme.css";
import jsonMovie from "./data/jsonData";
import MovieStatic from "./js/MovieStatic";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      json: jsonMovie,
      jsonValid: true,
      input: "Thor",
      movieFound: true // True or false
    };
  }

  validJson = () => {
    const jsonToValidate = this.state.json;
    let jsonValid = false;

    // Validate empty json files
    for (var key in jsonToValidate) {
      if (jsonToValidate.hasOwnProperty(key)) {
        jsonValid = true;
      }
    }
    this.setState({ jsonValid });
  };

  jsonApi = async () => {
    const response = await axios.get(
      process.env.REACT_APP_DOMAIN +
        "/?t=" +
        this.state.input +
        "&apikey=" +
        process.env.REACT_APP_SECRET_API_KEY
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
