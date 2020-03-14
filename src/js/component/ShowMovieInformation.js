import React from "react";

const BlockDescription = props => {
  let movieLabel = props.movieDb[props.category];
  let fullClass = "label_movie " + props.category;

  if (movieLabel === "N/A" || movieLabel === undefined) {
    return null;
  }

  if (props.type === "ratings") {
    let blockStorage = [];
    for (var i = 0; i < movieLabel.length; i++) {
      console.log(movieLabel, movieLabel[i]);
      let randomKey = "id_ratings_" + i;
      blockStorage.push(
        <label
          key={randomKey}
          className="lm_desc lm_ratings"
          attr-img={movieLabel[i]["Source"]}
        >
          {movieLabel[i]["Source"]}:{movieLabel[i]["Value"]}
        </label>
      );
    }
    return (
      <div className={fullClass}>
        <label className="lm_title">{props.category}:</label>
        {blockStorage}
      </div>
    );
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

  return null;
};

const ShowMovieInformation = ({ movieDb, movieFound, jsonValid }) => {
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
        <BlockDescription
          inf="15"
          movieDb={movieDb}
          category="Ratings"
          type="ratings"
        />
        <BlockDescription
          inf="18"
          movieDb={movieDb}
          category="imdbID"
          type="text"
        />
        <BlockDescription
          inf="14"
          movieDb={movieDb}
          category="Poster"
          type="img"
        />
        <BlockDescription
          inf="1"
          movieDb={movieDb}
          category="Title"
          type="text"
        />
        <BlockDescription
          inf="2"
          movieDb={movieDb}
          category="Year"
          type="text"
        />
        <BlockDescription
          inf="3"
          movieDb={movieDb}
          category="Rated"
          type="text"
        />
        <BlockDescription
          inf="4"
          movieDb={movieDb}
          category="Released"
          type="text"
        />
        <BlockDescription
          inf="5"
          movieDb={movieDb}
          category="Runtime"
          type="text"
        />
        <BlockDescription
          inf="6"
          movieDb={movieDb}
          category="Genre"
          type="text"
        />
        <BlockDescription
          inf="7"
          movieDb={movieDb}
          category="Director"
          type="text"
        />
        <BlockDescription
          inf="8"
          movieDb={movieDb}
          category="Writer"
          type="text"
        />
        <BlockDescription
          inf="9"
          movieDb={movieDb}
          category="Actors"
          type="text"
        />
        <BlockDescription
          inf="10"
          movieDb={movieDb}
          category="Plot"
          type="text"
        />
        <BlockDescription
          inf="11"
          movieDb={movieDb}
          category="Language"
          type="text"
        />
        <BlockDescription
          inf="12"
          movieDb={movieDb}
          category="Country"
          type="text"
        />
        <BlockDescription
          inf="13"
          movieDb={movieDb}
          category="Awards"
          type="text"
        />
        <BlockDescription
          inf="16"
          movieDb={movieDb}
          category="Metascore"
          type="text"
        />
        <BlockDescription
          inf="17"
          movieDb={movieDb}
          category="imdbRating"
          type="text"
        />
        <BlockDescription
          inf="19"
          movieDb={movieDb}
          category="Type"
          type="text"
        />
        <BlockDescription
          inf="20"
          movieDb={movieDb}
          category="DVD"
          type="text"
        />
        <BlockDescription
          inf="21"
          movieDb={movieDb}
          category="BoxOffice"
          type="text"
        />
        <BlockDescription
          inf="22"
          movieDb={movieDb}
          category="Production"
          type="text"
        />
        <BlockDescription
          inf="23"
          movieDb={movieDb}
          category="Website"
          type="text"
        />
      </div>
    </React.Fragment>
  );
};

export default ShowMovieInformation;
