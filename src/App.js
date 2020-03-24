import React from "react";

// APP : LIBRARY
import axios from "axios";

// APP : STATE
import stateSetting from "./data/state/state";

// APP : FUNCTIONS : VALIDATION
import ValidateJSON from "./js/util/json/validJson";

// APP : STYLE
import "./css/style.scss";

// APP : DEV : HELPER
import Helper from "./js/component/_Dev/Helper";

// APP : STRUCTURE
import Header from "./js/component/Structure/Header/Header";
import Navigation from "./js/component/Structure/Navigation/Navigation";
import NavigationLogged from "./js/component/Structure/NavigationLogged/NavigationLogged";
import NavigationAdmin from "./js/component/Structure/NavigationAdmin/NavigationAdmin";
import Footer from "./js/component/Structure/Footer/Footer";

// APP : PAGE
import Home from "./js/component/Page/Home/Home";
import SearchResult from "./js/component/Page/Search/SearchResult";
import User from "./js/component/Page/User/User";
import Favourite from "./js/component/Page/Favourite/Favourite";
import Register from "./js/component/Page/Register/Register";
import Contact from "./js/component/Page/Contact/Contact";

// APP : PAGE : Logged

// APP : PAGE : Admin
import Delete from "./js/component/Page/Delete/Delete";
import AllUsers from "./js/component/Page/AllUsers/AllUsers";

// APP : SUBPAGE : PAGE : SEARCH
import SearchForm from "./js/component/Page/Search/SearchForm";
import MovieDescription from "./js/component/Page/Search/MovieDescription";

// RULES
//import rules from "./js/config/rules";

// ROUTE URL
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = stateSetting;
  }

  jsonApi = async e => {
    if (e !== null) {
      e.preventDefault();
    }

    console.log("yes i want to search");
    let matchTitle = "",
      searchAll = "",
      matchYear = "",
      matchId = "";
    const domain = process.env.REACT_APP_DOMAIN;
    const apikey = "&apikey=" + process.env.REACT_APP_SECRET_API_KEY;

    if (this.state.movieFromSearch === true) {
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

    console.log(
      "yes i want to search 2",
      matchTitle,
      searchAll,
      matchYear,
      matchId
    );
    if (
      matchTitle === "" &&
      searchAll === "" &&
      matchYear === "" &&
      matchId === ""
    ) {
      console.log("all are empty");
      return null;
    }
    await axios
      .get(domain + "/" + searchAll + matchTitle + matchId + matchYear + apikey)
      .then(response => {
        if (
          response.data.Response === "True" ||
          response.data.Response === true
        ) {
          this.setState({ jsonValid: ValidateJSON(response.data) });

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
      })
      .catch(error => {
        this.setState({
          json: {},
          movieFound: false,
          catchError: error.toJSON()
        });
      });
  };

  handleSearchDisableYearCheckbox = () => {
    // if (this.state.searchMatchTitleCheckbox === true) {
    //   this.setState({
    //     searchDisableYearCheckbox: false
    //   });
    // } else {
    //   this.setState({
    //     searchDisableYearCheckbox: true
    //   });
    // }
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
      if (value.length === 7) {
        value = "tt" + value;
      }
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

  clearInputs = value => {
    console.log("rules", value);
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

        searchAllMovie: false,
        movieFound: false
      });

      e.preventDefault();
    }

    if (this.state.offlineJson === true) {
      this.setState({
        json: {},
        movieFound: false
      });
    }

    this.setState(
      prevState => ({
        offlineJson: !prevState.offlineJson
      }),
      () => {
        //console.log(this.state.offlineJson);
      }
    );
  };

  showMovie = e => {
    //console.log("Show movie id:", e.target.getAttribute("id"));
    this.setState(
      {
        searchAllMovie: false,
        movieFromSearch: true,
        movieFromSearchID: e.target.getAttribute("id"),
        page: "search"
      },
      () => {
        this.jsonApi(null);
      }
    );
  };

  // signIn = props => {
  //   //console.log("VALIDATE: sign in", props);

  //   let userLogin = props.user;
  //   let userPassword = props.password;
  //   let signInStateUser = this.state.userData.login;
  //   let signInStatePassword = this.state.userData.password;
  //   if (userLogin === signInStateUser && userPassword === signInStatePassword) {
  //     this.setState({ loginStatus: true });
  //   }
  // };

  signIn = props => {
    console.log("SIGN", props);
    this.setState({
      loginStatus: true,
      userDataLogin: props.userDataLogin,
      accessLv: props.accessLv
    });
  };

  updateFavourites = props => {
    console.log("updateFavourites", props);
    this.setState({
      favourites: props.favourites
    });
  };

  logOut = () => {
    this.setState({
      loginStatus: false,
      accessLv: undefined,
      userDataLogin: undefined
    });
  };

  changePage = e => {
    console.log("change name", e.target);
    this.setState({
      page: e.target.getAttribute("name")
    });
  };

  favouritesAdd = async e => {
    const id = e.target.getAttribute("movie-id");
    const title = e.target.getAttribute("movie-title");
    const year = e.target.getAttribute("movie-year");
    const poster = e.target.getAttribute("movie-poster");
    const favourites = this.state.favourites;
    favourites[id] = { title: title, poster: poster, year: year };
    this.setState({
      favourites: favourites
    });

    var url =
      process.env.REACT_APP_REGISTER_FAVOURITES +
      "/" +
      this.state.userDataLogin.id;

    var favNew = {
      id: this.state.userDataLogin.id,
      put: true,
      movies: this.state.favourites
    };

    await axios.put(url, favNew).then(response => {
      console.log("that one", response);
    });
  };

  favouriteRemove = async e => {
    const movieid = e.target.getAttribute("movieid");
    const favourites = this.state.favourites;
    delete favourites[movieid];
    this.setState({ favourites: favourites });

    var url =
      process.env.REACT_APP_REGISTER_FAVOURITES +
      "/" +
      this.state.userDataLogin.id;

    var favNew = {
      id: this.state.userDataLogin.id,
      put: true,
      movies: this.state.favourites
    };

    await axios.put(url, favNew).then(response => {
      console.log("that one", response);
    });
  };

  NoMatch = ({ location }) => (
    <div>
      <h3>
        404 : No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );

  render() {
    return (
      <Router>
        <div id="app-wrapper">
          {/* DEV: TOOL : HELPER */}
          <Helper state={this.state} />

          {/* APP : STRUCTURE : HEADER */}
          <Header
            logOut={this.logOut}
            userDataLogin={this.state.userDataLogin}
            signIn={this.signIn}
            updateFavourites={this.updateFavourites}
            loginStatus={this.state.loginStatus}
          />
          {/* APP : STRUCTURE : NAVIGATION */}
          <Navigation
            pagesList={this.state.pagesList}
            changePage={this.changePage}
            page={this.state.page}
            accessLv={this.state.accessLv}
          />
          <NavigationLogged
            pagesListLogged={this.state.pagesListLogged}
            changePage={this.changePage}
            page={this.state.page}
            accessLv={this.state.accessLv}
          />
          <NavigationAdmin
            pagesListAdmin={this.state.pagesListAdmin}
            changePage={this.changePage}
            page={this.state.page}
            accessLv={this.state.accessLv}
          />

          <div className="app-container__body">
            <Switch>
              <Route path="/home">
                <label className="app-container__title">
                  <span className="icon-home"> </span>Home:
                </label>
                <Home />
              </Route>

              <Route path="/search">
                <React.Fragment>
                  <label className="app-container__title">
                    <span className="icon-search"> </span>Search:
                  </label>
                  <SearchForm
                    toggleOfflineJson={this.toggleOfflineJson}
                    handleSearchDisableYearCheckbox={
                      this.handleSearchDisableYearCheckbox
                    }
                    state={this.state}
                    clearInputs={this.clearInputs}
                    updateInputs={this.updateInputs}
                    updateCheckbox={this.updateCheckbox}
                    updateSearchMatchTitleCheckbox={
                      this.updateSearchMatchTitleCheckbox
                    }
                    updateSearchMatchYearCheckbox={
                      this.updateSearchMatchYearCheckbox
                    }
                    updateSearchMatchIdCheckbox={
                      this.updateSearchMatchIdCheckbox
                    }
                    jsonApi={this.jsonApi}
                  />
                  <MovieDescription
                    favouritesAdd={this.favouritesAdd}
                    favouritesRemove={this.favouritesRemove}
                    movieDb={this.state.json}
                    movieFound={this.state.movieFound}
                    jsonValid={this.state.jsonValid}
                    searchAllMovie={this.state.searchAllMovie}
                  />
                  <SearchResult
                    catchError={this.state.catchError}
                    searchAllTitle={this.state.searchAllTitle}
                    searchAllMovie={this.state.searchAllMovie}
                    searchTotalResult={this.state.searchTotalResult}
                    movieDb={this.state.json}
                    movieFound={this.state.movieFound}
                    jsonValid={this.state.jsonValid}
                    showMovie={this.showMovie}
                  />
                </React.Fragment>
              </Route>

              <Route path="/user">
                <label className="app-container__title">
                  <span className="icon-search"> </span>User:
                </label>
                <User
                  statusLogin={this.state.loginStatus}
                  user={this.state.user}
                />
              </Route>

              <Route path="/favourite">
                <label className="app-container__title">
                  <span className="icon-search"> </span>Favourite:
                </label>
                <Favourite
                  userID={this.state.userDataLogin}
                  statusLogin={this.state.loginStatus}
                  favourite={this.state.favourites}
                  favouriteRemove={this.favouriteRemove}
                  showMovie={this.showMovie}
                />
              </Route>

              <Route path="/register">
                <label className="app-container__title">
                  <span className="icon-search"> </span>Register:
                </label>
                <Register message={this.message} />
              </Route>

              <Route path="/contact">
                <label className="app-container__title">
                  <span className="icon-search"> </span>Contact:
                </label>
                <Contact />
              </Route>

              <Route path="/delete">
                <label className="app-container__title">
                  <span className="icon-search"> </span>Delete:
                </label>
                <Delete />
              </Route>

              <Route path="/all_users">
                <label className="app-container__title">
                  <span className="icon-user"> </span>All users:
                </label>
                <AllUsers />
              </Route>

              <Route component={this.NoMatch} />
            </Switch>
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
