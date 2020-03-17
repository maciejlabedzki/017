import movieLocalJsonData from "../json/movieLocalJsonData";
import user from "../json/user";

const stateSetting = {
  json: movieLocalJsonData,
  jsonOffline: movieLocalJsonData,
  jsonValid: true,
  jsonResponse: "",
  jsonError: "",
  movieFound: true,

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

  searchAllPage: 1,
  searchAllPages: 10,
  searchTotalResult: 0,

  movieFromSearch: false,
  movieFromSearchID: "",

  debug: false,
  offlineJson: true,

  searchMatchButton: false,

  userData: {
    login: "admin",
    password: "admin",
    name: "John",
    lastName: "Doe"
  },
  page: "search",
  loginStatus: true,
  user: user,
  edit: { long: { a: 1, b: 2, c: 3, d: 4 }, short: { a: 1 }, medium: { c: 1 } },
  favourites: {
    tt00000001: {
      title: "aaa",
      src:
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
    }
  }
  // user: "admin",
  // password: "Aa123456",
  // loginStatus: false
};

export default stateSetting;
