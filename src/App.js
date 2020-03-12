import React from "react";
import axios from "axios";
import "./css/App.css";
import "./css/App_theme.css";
import movieLocalJsonData from "./data/movieLocalJsonData";
import MovieStatic from "./js/MovieStatic";
import ValidJson from "./js/util/validJson";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      json: movieLocalJsonData,
      jsonValid: true,
      input: "Thor",
      inputID: "",
      movieFound: true // True or false
    };
  }

  // validJson = () => {
  //   const jsonToValidate = this.state.json;
  //   let jsonValid = false;

  //   // Validate empty json files
  //   for (var key in jsonToValidate) {
  //     if (jsonToValidate.hasOwnProperty(key)) {
  //       jsonValid = true;
  //     }
  //   }
  //   this.setState({ jsonValid });
  // };

  jsonApi = async () => {
    let searchTitle = "",
      searchId = "";
    const domain = process.env.REACT_APP_DOMAIN;
    const apikey = "&apikey=" + process.env.REACT_APP_SECRET_API_KEY;
    if (this.state.input !== "") {
      searchTitle = "/?t=" + this.state.input;
    }

    if (this.state.inputID !== "") {
      searchId = "/?i=" + this.state.inputID;
    }

    const response = await axios.get(domain + searchTitle + searchId + apikey);
    if (response.data.Response) {
      this.setState(
        {
          json: response.data,
          movieFound: true
        },
        () => {}
      );

      this.setState({ jsonValid: ValidJson(response.data) });
    } else {
      this.setState({ movieFound: false });
    }
  };

  updateInput = e => {
    this.setState({
      input: e.target.value
    });
  };

  updateInputID = e => {
    this.setState({
      inputID: e.target.value
    });
  };

  render() {
    return (
      <div>
        <input defaultValue={this.state.input} onChange={this.updateInput} />
        <input
          defaultValue={this.state.inputID}
          onChange={this.updateInputID}
        />
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
