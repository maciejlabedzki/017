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
  offlineJson: false,

  searchMatchButton: false,

  userData: {
    login: "admin",
    password: "admin",
    name: "John",
    lastName: "Doe"
  },
  loginStatus: false,
  user: user
  // user: "admin",
  // password: "Aa123456",
  // loginStatus: false
};

export default stateSetting;
