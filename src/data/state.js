import movieLocalJsonData from "../data/movieLocalJsonData";

const stateSetting = {
  json: movieLocalJsonData,
  jsonValid: true,
  movieFound: true,
  inputs: {
    matchBy: {
      title: { value: "", option: false },
      id: "",
      year: ""
    },
    searchBy: {
      title: "",
      id: "",
      year: ""
    }
  },
  input: "",
  inputID: "",
  inputSearch: "",
  inputYear: ""
};

export default stateSetting;
