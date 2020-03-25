import movieLocalJsonData from "../json/movieLocalJsonData";
import user from "../json/user";
import favouriteJSON from "../json/favourite.json";
import commentsJSON from "../json/comments.json";
import LanguageJSON from "./../language/language.json";

const stateSetting = {
  langCountry: "en",
  lang: LanguageJSON["en"],
  development: "production",
  page: "register",
  accessLv: undefined,
  loginStatus: false,
  json: movieLocalJsonData,
  jsonOffline: movieLocalJsonData,
  jsonValid: true,
  jsonResponse: "",
  jsonError: "",
  catchError: "",
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

  user: user,
  userData: {
    login: "admin",
    password: "admin",
    name: "John",
    lastName: "Doe"
  },
  userDataLogin: {
    id: "bedzki@wp.pl",
    accessLv: "admin",
    registryDate: 1584952785664,
    name: "Maciej",
    lastName: "Łabędzki",
    mail: "bedzki@wp.pl",
    password: "aaaaaaaa",
    favourite: "fav001",
    userDetails: user
  },

  accountLv: {
    0: "admin",
    1: "guest",
    2: "user",
    3: "manager",
    4: "marketing",
    5: "affiliate"
  },
  pagesList: ["home", "search", "register", "contact", "features"],
  pagesListLogged: ["user", "favourite"],
  pagesListAdmin: [
    "user",
    "favourite",
    "delete",
    "all users",
    "register",
    "features"
  ],

  comments: commentsJSON,
  // commentsReplay: {
  //   "comments-ucid-1": [
  //     {
  //       title: "I like this movie also",
  //       describe: "Lorem ipsum",
  //       commentsUID: "comments-ucid-1",
  //       autor: "admin",
  //       date: "12:13:11 13.03.2020",
  //       autorUUID: "1"
  //     }
  //   ]
  // },

  favourites: favouriteJSON
  //edit: { long: { a: 1, b: 2, c: 3, d: 4 }, short: { a: 1 }, medium: { c: 1 } },
  // favourites: {
  //   tt00000001: {
  //     title: "aaa",
  //     src:
  //       "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
  //   }
  // }
  // user: "admin",
  // password: "Aa123456",
  // loginStatus: false
};

export default stateSetting;
