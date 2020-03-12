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
      inputID: "tt0800369",
      movieFound: true // True or false
    };
    this.form = React.createRef();
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

  clearInput = () => {
    this.setState({ input: "", inputId: "" });
  };

  updateInput = e => {
    this.setState({
      input: e.target.value,
      inputID: ""
    });
  };

  updateInputID = e => {
    let value = e.target.value;
    console.log("value", value.length);
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

  render() {
    return (
      <div>
        <p>
          <label>Movie Title:</label>
          <input defaultValue={this.state.input} onChange={this.updateInput} />
        </p>

        <p>
          <label>Movie ID [tt0******]:</label>
          <input
            defaultValue={this.state.inputID}
            onChange={this.updateInputID}
          />
        </p>

        <button onClick={this.jsonApi}>OMDB Api</button>

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
