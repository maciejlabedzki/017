import movieLocalJsonData from "../data/movieLocalJsonData";

const stateSetting = {
  json: movieLocalJsonData,
  jsonValid: true,
  movieFound: true,
  inputs: {
    matchBy: {
      title: { value: "", option: false },
      id: { value: "", option: false },
      year: { value: "", option: false }
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
