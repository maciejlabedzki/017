import movieJSON from "../json/offline/movie";
import user from "../json/users/user";
import favouriteJSON from "../json/favourites/favourites.json";
import commentsJSON from "../json/comments/comments.json";
import LanguageJSON from "./../language/language.json";

const stateSetting = {
  __pathName: "/0_projects/017/build",
  pathName: "/moviedb",
  _pathName: "/017",
  langCountry: "en",
  lang: LanguageJSON["en"],
  development: "production",
  page: "features",
  accessLv: undefined,
  loginStatus: false,
  json: movieJSON,
  jsonOffline: movieJSON,
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
  userDataLogin: undefined,

  // accountLv: {
  //   0: "admin",
  //   1: "guest",
  //   2: "user",
  //   3: "manager",
  //   4: "marketing",
  //   5: "affiliate"
  // },
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
  favourites: favouriteJSON

  // userData: {
  //   login: "admin",
  //   password: "admin",
  //   name: "John",
  //   lastName: "Doe"
  // },

  // userDataLogin: {
  //   id: "bedzki@wp.pl",
  //   accessLv: "admin",
  //   registryDate: 1584952785664,
  //   name: "Maciej",
  //   lastName: "Łabędzki",
  //   mail: "bedzki@wp.pl",
  //   password: "aaaaaaaa",
  //   favourite: "fav001",
  //   userDetails: user
  // },

  // homepageUrl: "http://maciejlabedzki.pl/0_projects/017/build/",

  // route: {
  //   home: "http://maciejlabedzki.pl/0_projects/017/build/home",
  //   landing: "http://maciejlabedzki.pl/0_projects/017/build/"
  // }
};

export default stateSetting;
