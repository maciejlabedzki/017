import React from "react";
import axios from "axios";
import "./css/style.scss";
import ShowMovieInformation from "./js/component/ShowMovieInformation";
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
      matchTitle = "?t=" + this.state.input;
    }

    if (this.state.inputID !== "") {
      matchId = "?i=" + this.state.inputID;
    }

    const response = await axios.get(
      domain + "/" + matchTitle + matchId + apikey
    );

    if (response.data.Response === "True" || response.data.Response === true) {
      this.setState({ jsonValid: ValidJson(response.data) });

      if (this.state.jsonValid === true) {
        this.setState({
          json: response.data,
          movieFound: true
        });
      }
    } else {
      this.setState({ json: response.data, movieFound: false });
    }
  };

  updateInputTitle = e => {
    if (
      e.target.value === null ||
      e.target.value === "" ||
      e.target.value === undefined
    ) {
      return;
    }
    this.setState({
      input: e.target.value
    });
  };

  updateInputYear = e => {
    if (
      e.target.value === null ||
      e.target.value === "" ||
      e.target.value === undefined
    ) {
      return;
    }
    this.setState({
      inputYear: e.target.value
    });
  };

  updateInputID = e => {
    if (
      e.target.value === null ||
      e.target.value === "" ||
      e.target.value === undefined
    ) {
      return;
    }
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
      inputID: value
    });
  };

  render() {
    return (
      <div>
        <ToolDeveloper state={this.state} />
        <StructureHeader />
        <StructureSearch
          state={this.state}
          updateInput={this.updateInputTitle}
          updateInputID={this.updateInputID}
          updateInputYear={this.updateInputYear}
          jsonApi={this.jsonApi}
        />

        <ShowMovieInformation
          movieDb={this.state.json}
          movieFound={this.state.movieFound}
          jsonValid={this.state.jsonValid}
        />
      </div>
    );
  }
}

export default App;
