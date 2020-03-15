import React from "react";

const BlockDescription = ({ movieDb, searchAllTitle, searchTotalResult }) => {
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
    movieArr.push(
      <div key={randomKey} className="app_container lm_list">
        <div className="lm_col_left">
          <label className="lm_list-poster">
            <img src={movieDatabase[i]["Poster"]} alt="poster" />
          </label>
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
      <label className="lm_title">
        Found [ {searchTotalResult} ] records about "{searchAllTitle}"
      </label>
      {movieArr}
    </div>
  );
};

const ShowSearchInformation = ({
  movieDb,
  movieFound,
  jsonValid,
  searchAllMovie,
  searchAllTitle,
  searchTotalResult
}) => {
  if (searchAllMovie === false) {
    return null;
  }

  if (movieFound !== true) {
    return "No movies found";
  }
  if (jsonValid !== true) {
    return "No valid JSON";
  }

  if (searchAllMovie === true) {
    return (
      <div className="app_container">
        <BlockDescription
          movieDb={movieDb}
          searchAllTitle={searchAllTitle}
          searchTotalResult={searchTotalResult}
        />
      </div>
    );
  }
};

export default ShowSearchInformation;
