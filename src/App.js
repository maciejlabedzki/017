import React from "react";
import axios from "axios";
import "./css/style.scss";
import ShowMovieInformation from "./js/component/ShowMovieInformation";
import ValidJson from "./js/util/json/validJson";

import stateSetting from "./data/state";

import StructureHeader from "./js/component/StructureHeader";
import StructureSearch from "./js/component/StructureSearch";

import ToolDeveloper from "./js/component/ToolDeveloper";

// import updateInputs from "./js/util/input/updateInputValue";

// import exist from "./js/util/var/exist";

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
      matchTitle = "?t=" + this.state.searchMatchTitleInput;
    }

    if (this.state.inputID !== "") {
      matchId = "?i=" + this.state.searchMatchIdInput;
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

  updateInputs = e => {
    if (e.target.getAttribute("name") === "searchMatchTitleInput") {
      this.setState({
        searchMatchTitleInput: e.target.value
      });
    }
    if (e.target.getAttribute("name") === "searchMatchIdInput") {
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
        searchMatchIdInput: value
      });
    }
    if (e.target.getAttribute("name") === "searchMatchYearInput") {
      this.setState({
        searchMatchYearInput: e.target.value
      });
    }
  };

  updateCheckbox = e => {
    if (e.target.getAttribute("name") === "searchMatchTitleCheckbox") {
      this.setState(prevState => ({
        searchMatchTitleCheckbox: !prevState.searchMatchTitleCheckbox
      }));
    }
    if (e.target.getAttribute("name") === "searchMatchIdCheckbox") {
      this.setState(prevState => ({
        searchMatchIdCheckbox: !prevState.searchMatchIdCheckbox
      }));
    }
    if (e.target.getAttribute("name") === "searchMatchYearCheckbox") {
      this.setState(prevState => ({
        searchMatchYearCheckbox: !prevState.searchMatchYearCheckbox
      }));
    }
    this.validateSearchButton();
  };

  validateSearchButton = () => {
    if (
      this.state.searchMatchIdCheckbox ||
      this.state.searchMatchTitleCheckbox ||
      this.state.searchMatchYearCheckbox
    ) {
      this.setState({
        searchMatchButton: true
      });
    } else {
      this.setState({
        searchMatchButton: false
      });
    }
    console.log("validate");
  };

  render() {
    return (
      <div>
        <ToolDeveloper state={this.state} />
        <StructureHeader />
        <StructureSearch
          state={this.state}
          updateInputs={this.updateInputs}
          updateCheckbox={this.updateCheckbox}
          updateSearchMatchTitleCheckbox={this.updateSearchMatchTitleCheckbox}
          updateSearchMatchYearCheckbox={this.updateSearchMatchYearCheckbox}
          updateSearchMatchIdCheckbox={this.updateSearchMatchIdCheckbox}
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
