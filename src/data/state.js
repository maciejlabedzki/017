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
  searchMatchTitleCheckbox: true,

  searchMatchYearInput: "",
  searchMatchYearCheckbox: false,

  searchMatchIdInput: "",
  searchMatchIdCheckbox: false,

  searchMatchButton: false
};

export default stateSetting;
