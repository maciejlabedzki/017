import movieLocalJsonData from "../json/movieLocalJsonData";

const stateSetting = {
  json: movieLocalJsonData,
  jsonOffline: movieLocalJsonData,
  jsonValid: true,
  movieFound: true,
  inputTitle: "",
  inputID: "",
  inputSearch: "",
  inputYear: "",

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

  searchMatchButton: false
};

export default stateSetting;
