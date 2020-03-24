import React from "react";
import imgNoPoster from "../../../../assets/img/no-poster.jpg";

const BlockDescription = ({
  movieDb,
  searchAllTitle,
  searchTotalResult,
  showMovie
}) => {
  if (movieDb === undefined) {
    return false;
  }

  let movieDatabase = movieDb["Search"];

  if (movieDatabase === undefined) {
    return false;
  }

  let movieArr = [];

  for (var i = 0; i < movieDatabase.length; i++) {
    let randomKey = "movie_list_" + i;
    let img = "";
    if (movieDatabase[i]["Poster"] !== "N/A") {
      img = <img src={movieDatabase[i]["Poster"]} alt="poster" />;
    } else {
      img = <img src={imgNoPoster} alt="no poster" />;
    }
    let imdbID = movieDatabase[i]["imdbID"];
    movieArr.push(
      <div
        key={randomKey}
        className="app-container lm_list"
        id={imdbID}
        onClick={showMovie}
      >
        <div className="lm_col_left">
          <label className="lm_list-poster">{img}</label>
        </div>
        <div className="lm_col_right">
          <label className="lm_list-title">{movieDatabase[i]["Title"]}</label>
          <label className="lm_list-year">
            Year: {movieDatabase[i]["Year"]}
          </label>
          <label className="lm_list-type">
            Type: {movieDatabase[i]["Type"]}
          </label>
          <label className="lm_list-id">{movieDatabase[i]["imdbID"]}</label>
        </div>
      </div>
    );
  }

  return (
    <div className="lm_search_results">
      <label className="app-container__title">
        Found [ {searchTotalResult} ] records about "{searchAllTitle}"
      </label>
      {movieArr}
    </div>
  );
};

const SearchResult = ({
  movieDb,
  movieFound,
  jsonValid,
  searchAllMovie,
  searchAllTitle,
  searchTotalResult,
  showMovie,
  catchError
}) => {
  if (searchAllMovie === false) {
    return null;
  }

  if (movieFound === false && movieDb !== undefined && catchError === "") {
    console.log("movieDb", movieDb);
    return (
      <div className="app-container warning">
        No movies found: {movieDb["Error"]}
      </div>
    );
  }

  if (movieFound === false && movieDb !== undefined && catchError !== "") {
    console.log("movieDb", movieDb);
    return (
      <div className="app-container warning">
        No movies found: {catchError["message"]}
      </div>
    );
  }

  if (jsonValid !== true) {
    return "No valid JSON";
  }

  if (searchAllMovie === true) {
    return (
      <div className="app-container">
        <BlockDescription
          movieDb={movieDb}
          searchAllTitle={searchAllTitle}
          searchTotalResult={searchTotalResult}
          showMovie={showMovie}
        />
      </div>
    );
  }
};

export default SearchResult;
