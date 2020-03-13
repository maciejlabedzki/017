import React from "react";

const BlockDescription = props => {
  let movieLabel = props.movieDb[props.category];
  let fullClass = "label_movie " + props.category;

  if (movieLabel === "N/A" || movieLabel === undefined) {
    return null;
  }

  if (props.type === "text") {
    return (
      <div className={fullClass}>
        <label className="lm_title">{props.category}:</label>
        <label className="lm_desc">{movieLabel}</label>
      </div>
    );
  }

  if (props.type === "img") {
    return (
      <div className={fullClass}>
        <label className="lm_title">{props.category}:</label>
        <label className="lm_desc">
          <img src={movieLabel} alt="Movie Poster" />
        </label>
      </div>
    );
  }
};

const MovieStatic = ({ movieDb, movieFound, jsonValid }) => {
  console.log("movieDb, movieFound, jsonValid", movieDb, movieFound, jsonValid);
  if (movieFound !== true) {
    return "No movie found";
  }
  if (jsonValid !== true) {
    return "No valid JSON";
  }

  return (
    <React.Fragment>
      <div className="app_container">
        <BlockDescription movieDb={movieDb} category="Poster" type="img" />
        <BlockDescription movieDb={movieDb} category="Title" type="text" />
        <BlockDescription movieDb={movieDb} category="Year" type="text" />
        <BlockDescription movieDb={movieDb} category="Rated" type="text" />
        <BlockDescription movieDb={movieDb} category="Released" type="text" />
        <BlockDescription movieDb={movieDb} category="Runtime" type="text" />
        <BlockDescription movieDb={movieDb} category="Genre" type="text" />
        <BlockDescription movieDb={movieDb} category="Director" type="text" />
        <BlockDescription movieDb={movieDb} category="Writer" type="text" />
        <BlockDescription movieDb={movieDb} category="Actors" type="text" />
        <BlockDescription movieDb={movieDb} category="Plot" type="text" />
        <BlockDescription movieDb={movieDb} category="Language" type="text" />
        <BlockDescription movieDb={movieDb} category="Country" type="text" />
        <BlockDescription movieDb={movieDb} category="Awards" type="text" />
        <BlockDescription movieDb={movieDb} category="Metascore" type="text" />
        <BlockDescription movieDb={movieDb} category="imdbRating" type="text" />
        <BlockDescription movieDb={movieDb} category="Type" type="text" />
        <BlockDescription movieDb={movieDb} category="DVD" type="text" />
        <BlockDescription movieDb={movieDb} category="BoxOffice" type="text" />
        <BlockDescription movieDb={movieDb} category="Production" type="text" />
        <BlockDescription movieDb={movieDb} category="Website" type="text" />
      </div>
    </React.Fragment>
  );
};

export default MovieStatic;
