import React from "react";
import axios from "axios";
import "./css/store.css";
import MovieStatic from "./js/MovieStatic";
import ValidJson from "./js/util/json/validJson";
import stateSetting from "./data/state";

import StructureHeader from "./js/component/StructureHeader";
import StructureSearch from "./js/component/StructureSearch";

import ToolDeveloper from "./js/component/ToolDeveloper";

class App extends React.Component {
  constructor() {
    super();
    this.state = stateSetting;
  }

  jsonApi = async e => {
    e.preventDefault();
    let matchTitle = "",
      matchId = "";
    const domain = process.env.REACT_APP_DOMAIN;
    const apikey = "&apikey=" + process.env.REACT_APP_SECRET_API_KEY;

    if (this.state.input !== "") {
      matchTitle = "/?t=" + this.state.input;
    }

    if (this.state.inputID !== "") {
      matchId = "/?i=" + this.state.inputID;
    }

    const response = await axios.get(domain + matchTitle + matchId + apikey);

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

  render() {
    return (
      <div>
        <ToolDeveloper data={this.state} />
        <StructureHeader />
        <StructureSearch
          state={this.state}
          updateInput={this.updateInput}
          updateInputID={this.updateInputID}
          jsonApi={this.jsonApi}
        />

        <form className="header">
          <p>
            <label>Match Title:</label>
            <input
              dataid="movie"
              placeholder={this.state.input}
              onFocus={this.clearInputs}
              onChange={this.updateInput}
            />
          </p>

          <p>
            <label>Match ID:</label>
            <input
              placeholder={this.state.inputID}
              onChange={this.updateInputID}
            />
          </p>

          <button onClick={this.jsonApi}>OMDB Api</button>
        </form>

        {this.alertMessageShow}
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
