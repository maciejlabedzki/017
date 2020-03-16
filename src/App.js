import React from "react";
import axios from "axios";
import "./css/style.scss";
import ValidJson from "./js/util/json/validJson";
import stateSetting from "./data/state/state";

import StructureHeader from "./js/component/StructureHeader";
import StructureSearch from "./js/component/StructureSearch";

import ShowMovieInformation from "./js/component/ShowMovieInformation";
import ShowSearchInformation from "./js/component/ShowSearchInformation";

import ToolDeveloper from "./js/component/ToolDeveloper";

import UserPage from "./js/component/UserPage";
import NavBar from "./js/component/Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = stateSetting;
  }

  jsonApi = async e => {
    if (e !== null) {
      e.preventDefault();
    }

    let matchTitle = "",
      searchAll = "",
      matchYear = "",
      matchId = "";
    const domain = process.env.REACT_APP_DOMAIN;
    const apikey = "&apikey=" + process.env.REACT_APP_SECRET_API_KEY;

    if (this.state.movieFromSearch === true) {
      console.log("search this");
      matchId = "?i=" + this.state.movieFromSearchID;
    } else {
      if (this.state.offlineJson === true) {
        this.setState({
          json: this.state.jsonOffline,
          movieFound: true
        });
        return;
      }

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
        this.state.searchMatchYearInput !== "" &&
        this.state.searchMatchYearCheckbox === true &&
        this.state.searchMatchTitleInput !== "" &&
        this.state.searchMatchTitleCheckbox === true
      ) {
        matchYear = "&y=" + this.state.searchMatchYearInput;
      }

      if (
        this.state.searchMatchIdInput !== "" &&
        this.state.searchMatchIdCheckbox === true
      ) {
        matchId = "?i=" + this.state.searchMatchIdInput;
      }
    }

    const response = await axios.get(
      domain + "/" + searchAll + matchTitle + matchId + matchYear + apikey
    );

    // console.log(
    //   ' domain + "/" + matchTitle + matchId + matchYear + apikey',
    //   domain + "/" + matchTitle + matchId + matchYear + apikey
    // );

    if (response.data.Response === "True" || response.data.Response === true) {
      this.setState({ jsonValid: ValidJson(response.data) });

      if (this.state.jsonValid === true) {
        this.setState({
          json: response.data,
          movieFromSearch: false,
          movieFound: true
        });

        if (this.state.searchAllMovie === true) {
          this.setState({
            searchTotalResult: response.data["totalResults"]
          });
        }
      }
    } else {
      this.setState({
        json: response.data,
        movieFound: false,
        jsonResponse: response.data["Response"],
        jsonError: response.data["Error"]
      });
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
      searchAllTitleCheckbox: true,

      movieFromSearch: false
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
  };

  toggleOfflineJson = e => {
    e.preventDefault();
    if (this.state.offlineJson === false) {
      this.setState({
        json: {},
        searchMatchTitleInput: "",
        searchMatchTitleCheckbox: false,

        searchMatchYearInput: "",
        searchMatchYearCheckbox: false,

        searchMatchIdInput: "",
        searchMatchIdCheckbox: false,

        searchAllTitleInput: "",
        searchAllTitleCheckbox: true,
        searchAllTitle: "",

        searchAllMovie: false
      });
    }

    if (this.state.offlineJson === true) {
      this.setState({
        json: {}
      });
    }

    this.setState(
      prevState => ({
        offlineJson: !prevState.offlineJson
      }),
      () => {
        console.log(this.state.offlineJson);
      }
    );
  };

  showMovie = e => {
    console.log("Show movie id:", e.target.getAttribute("id"));
    this.setState(
      {
        searchAllMovie: false,
        movieFromSearch: true,
        movieFromSearchID: e.target.getAttribute("id")
      },
      () => {
        this.jsonApi(null);
      }
    );
  };

  signIn = props => {
    console.log("VALIDATE: sign in", props);

    let userLogin = props.user;
    let userPassword = props.password;
    let signInStateUser = this.state.userData.login;
    let signInStatePassword = this.state.userData.password;
    if (userLogin === signInStateUser && userPassword === signInStatePassword) {
      this.setState({ loginStatus: true });
    }
  };

  logOut = () => {
    this.setState({ loginStatus: false });
  };

  changePage = e => {
    this.setState({
      page: e.target.getAttribute("name")
    });
  };

  render() {
    return (
      <div>
        <ToolDeveloper state={this.state} />

        <StructureHeader
          logOut={this.logOut}
          userData={this.state.userData}
          signIn={this.signIn}
          loginStatus={this.state.loginStatus}
        />

        <NavBar changePage={this.changePage} />

        {this.state.page === "home" && (
          <div className="app_container">HOME PAGE ---> SOON</div>
        )}

        {this.state.page === "search" && (
          <React.Fragment>
            <StructureSearch
              toggleOfflineJson={this.toggleOfflineJson}
              state={this.state}
              clearInputs={this.clearInputs}
              updateInputs={this.updateInputs}
              updateCheckbox={this.updateCheckbox}
              updateSearchMatchTitleCheckbox={
                this.updateSearchMatchTitleCheckbox
              }
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
              showMovie={this.showMovie}
            />
          </React.Fragment>
        )}
        {this.state.page === "user page" && this.state.loginStatus === true && (
          <UserPage
            statusLogin={this.state.loginStatus}
            user={this.state.user}
          />
        )}

        {this.state.page === "user page" &&
          this.state.loginStatus === false && (
            <div className="app_container">
              Please login to see that page L: admin P: admin
            </div>
          )}

        {this.state.page === "register" && (
          <div className="app_container">Register</div>
        )}

        {this.state.page === "contact" && (
          <div className="app_container">Contact</div>
        )}
      </div>
    );
  }
}

export default App;
