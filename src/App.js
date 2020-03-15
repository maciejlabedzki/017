import React from "react";
import axios from "axios";
import "./css/style.scss";
import ShowMovieInformation from "./js/component/ShowMovieInformation";
import ValidJson from "./js/util/json/validJson";

import stateSetting from "./data/state";

import StructureHeader from "./js/component/StructureHeader";
import StructureSearch from "./js/component/StructureSearch";

import ShowSearchInformation from "./js/component/ShowSearchInformation";

import ToolDeveloper from "./js/component/ToolDeveloper";

// import updateInputs from "./js/util/input/updateInputValue";

// import exist from "./js/util/var/exist";

class App extends React.Component {
  constructor() {
    super();
    this.state = stateSetting;
    this.refForm = React.createRef();
  }

  jsonApi = async e => {
    e.preventDefault();

    // test if there is any value to search
    if (
      this.state.searchAllTitleCheckbox === false &&
      this.state.searchMatchYearCheckbox === false &&
      this.state.searchMatchIdCheckbox === false &&
      this.state.searchMatchTitleCheckbox === false
    ) {
      return;
    }

    // test if there is any value to search
    if (
      this.state.searchAllTitleInput === "" &&
      this.state.searchMatchTitleInput === "" &&
      this.state.searchMatchIdInput === "" &&
      this.state.searchMatchYearInput === ""
    ) {
      return;
    }

    let matchTitle = "",
      searchAll = "",
      matchYear = "",
      matchId = "";
    const domain = process.env.REACT_APP_DOMAIN;
    const apikey = "&apikey=" + process.env.REACT_APP_SECRET_API_KEY;

    if (
      this.state.searchAllTitleInput !== "" &&
      this.state.searchAllTitleCheckbox === true
    ) {
      searchAll = "?s=" + this.state.searchAllTitleInput;
      this.setState({
        searchAllMovie: true,
        searchAllTitle: this.state.searchAllTitleInput
      });
    } else {
      this.setState({ searchAllMovie: false });
    }

    if (
      this.state.searchMatchTitleInput !== "" &&
      this.state.searchMatchTitleCheckbox === true
    ) {
      matchTitle = "?t=" + this.state.searchMatchTitleInput;
    }

    if (
      this.state.searchMatchIdInput !== "" &&
      this.state.searchMatchIdCheckbox === true
    ) {
      matchId = "?i=" + this.state.searchMatchIdInput;
    }

    if (
      this.state.searchMatchYearInput !== "" &&
      this.state.searchMatchYearCheckbox === true &&
      this.state.searchMatchTitleInput !== "" &&
      this.state.searchMatchTitleCheckbox === true
    ) {
      matchYear = "?y=" + this.state.searchMatchYearInput;
    }

    const response = await axios.get(
      domain + "/" + searchAll + matchTitle + matchId + matchYear + apikey
    );

    console.log(
      ' domain + "/" + matchTitle + matchId + matchYear + apikey',
      domain + "/" + matchTitle + matchId + matchYear + apikey
    );

    if (response.data.Response === "True" || response.data.Response === true) {
      this.setState({ jsonValid: ValidJson(response.data) });

      if (this.state.jsonValid === true) {
        this.setState({
          json: response.data,
          movieFound: true
        });

        if (this.state.searchAllMovie === true) {
          this.setState({
            searchTotalResult: response.data["totalResults"]
          });
        }
      }
    } else {
      this.setState({ json: response.data, movieFound: false });
    }
  };

  updateInputs = e => {
    if (e.target.getAttribute("name") === "searchAllTitleInput") {
      this.setState({
        searchAllTitleInput: e.target.value
      });
    }

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

  clearInputs = () => {
    this.setState({
      searchMatchTitleInput: "",
      searchMatchTitleCheckbox: false,

      searchMatchYearInput: "",
      searchMatchYearCheckbox: false,

      searchMatchIdInput: "",
      searchMatchIdCheckbox: false,

      searchAllTitleInput: "",
      searchAllTitleCheckbox: true
    });
  };

  updateCheckbox = e => {
    if (e.target.getAttribute("name") === "searchAllTitleCheckbox") {
      this.setState(prevState => ({
        searchAllTitleCheckbox: !prevState.searchAllTitleCheckbox,
        searchAllTitleInput: "",

        searchMatchTitleInput: "",
        searchMatchTitleCheckbox: false,

        searchMatchYearInput: "",
        searchMatchYearCheckbox: false,

        searchMatchIdInput: "",
        searchMatchIdCheckbox: false
      }));
    }

    if (e.target.getAttribute("name") === "searchMatchTitleCheckbox") {
      this.setState(prevState => ({
        searchMatchTitleCheckbox: !prevState.searchMatchTitleCheckbox,
        searchMatchIdCheckbox: false,
        searchMatchIdInput: "",
        searchAllTitleInput: "",
        searchAllTitleCheckbox: false
      }));
    }

    if (e.target.getAttribute("name") === "searchMatchYearCheckbox") {
      this.setState(prevState => ({
        searchMatchYearCheckbox: !prevState.searchMatchYearCheckbox,
        searchMatchIdCheckbox: false,
        searchMatchIdInput: "",
        searchAllTitleInput: "",
        searchAllTitleCheckbox: false
      }));
    }

    if (e.target.getAttribute("name") === "searchMatchIdCheckbox") {
      this.setState(prevState => ({
        searchMatchIdCheckbox: !prevState.searchMatchIdCheckbox,
        searchMatchTitleCheckbox: false,
        searchMatchYearCheckbox: false,
        searchMatchTitleInput: "",
        searchMatchYearInput: "",
        searchAllTitleInput: "",
        searchAllTitleCheckbox: false
      }));
    }

    //this.validateSearchButton();
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
          clearInputs={this.clearInputs}
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
          searchAllMovie={this.state.searchAllMovie}
        />

        <ShowSearchInformation
          searchAllTitle={this.state.searchAllTitle}
          searchAllMovie={this.state.searchAllMovie}
          searchTotalResult={this.state.searchTotalResult}
          movieDb={this.state.json}
          movieFound={this.state.movieFound}
          jsonValid={this.state.jsonValid}
        />
      </div>
    );
  }
}

export default App;
