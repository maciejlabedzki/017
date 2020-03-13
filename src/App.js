import React from "react";
import axios from "axios";
import "./css/App.css";
import "./css/App_theme.css";
import movieLocalJsonData from "./data/movieLocalJsonData";
import stateLocalJsonData from "./data/movieLocalJsonData";
import MovieStatic from "./js/MovieStatic";
import ValidJson from "./js/util/validJson";
import DevTool from "./js/util/devTool";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      json: movieLocalJsonData,
      jsonValid: true,
      input: "Thor",
      inputID: "tt0800369",
      inputSearch: "",
      movieFound: true
    };
  }

  jsonApi = async e => {
    e.preventDefault();
    let searchTitle = "",
      searchId = "";
    const domain = process.env.REACT_APP_DOMAIN;
    const apikey = "&apikey=" + process.env.REACT_APP_SECRET_API_KEY;
    const response = await axios.get(domain + searchTitle + searchId + apikey);

    if (this.state.input !== "") {
      searchTitle = "/?t=" + this.state.input;
    }

    if (this.state.inputID !== "") {
      searchId = "/?i=" + this.state.inputID;
    }

    if (response.data.Response) {
      this.setState({ jsonValid: ValidJson(response.data) });

      if (this.state.jsonValid === true) {
        this.setState({
          json: response.data,
          movieFound: true
        });
      }
    } else {
      this.setState({ movieFound: false });
    }
  };

  updateInput = e => {
    this.setState({
      input: e.target.value,
      inputID: ""
    });
  };

  updateInputID = e => {
    let value = e.target.value;
    if (value.length === 6) {
      value = "tt0" + value;
    }
    if (value.length === 5) {
      value = "tt00" + value;
    }
    if (value.length === 4) {
      value = "tt000" + value;
    }
    if (value.length === 3) {
      value = "tt0000" + value;
    }
    if (value.length === 2) {
      value = "tt00000" + value;
    }
    if (value.length === 1) {
      value = "tt000000" + value;
    }
    if (value.length === 0) {
      value = "";
    }
    this.setState({
      inputID: value,
      input: ""
    });
  };

  clearInputs = e => {
    console.log(e.currentTarget.tag, e);
    // if (value !== "movie") {
    //   this.setState({ input: "" });
    // }
    // if (value !== "id") {
    //   this.setState({ inputID: "" });
    // }
  };

  render() {
    return (
      <div>
        <p>{DevTool(this.state)}</p>
        <form className="header">
          <p>
            <label>Movie Title:</label>
            <input
              dataid="movie"
              placeholder={this.state.input}
              onFocus={this.clearInputs}
              onChange={this.updateInput}
            />
          </p>

          <p>
            <label>Movie ID [tt0******]:</label>
            <input
              placeholder={this.state.inputID}
              onChange={this.updateInputID}
            />
          </p>

          <button onClick={this.jsonApi}>OMDB Api</button>
        </form>

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
