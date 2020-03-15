import movieLocalJsonData from "../data/movieLocalJsonData";

const stateSetting = {
  json: movieLocalJsonData,
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

  debug: false,

  searchMatchButton: false
};

export default stateSetting;
