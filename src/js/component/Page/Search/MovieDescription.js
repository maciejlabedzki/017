import React from "react";
import img_imdb from "../../../../assets/img/ratings_imdb.png";
import img_rotten from "../../../../assets/img/rotten_tomatoes.jpg";
import img_metacritics from "../../../../assets/img/ratings_metacritics.png";

const BlockDescription = props => {
  let movieLabel = props.movieDb[props.category];
  let fullClass = "app-container__description " + props.category;

  if (movieLabel === "N/A" || movieLabel === undefined) {
    return null;
  }

  if (props.type === "ratings") {
    if (movieLabel.length === 0) {
      return null;
    }
    let blockStorage = [];
    for (var i = 0; i < movieLabel.length; i++) {
      let randomKey = "id_ratings_" + i;
      let ratingName = movieLabel[i]["Source"];
      let imgSrc = "";
      if (ratingName === "Internet Movie Database") {
        imgSrc = img_imdb;
      } else if (ratingName === "Rotten Tomatoes") {
        imgSrc = img_rotten;
      } else if (ratingName === "Metacritic") {
        imgSrc = img_metacritics;
      }
      blockStorage.push(
        <label
          key={randomKey}
          className="app-container__desc lm_ratings"
          attr-img={ratingName}
        >
          <img className="ratings_img" src={imgSrc} alt="Rating Images" />
          {ratingName}:{movieLabel[i]["Value"]}
        </label>
      );
    }
    return (
      <div className={fullClass}>
        <label className="app-container__title">{props.category}:</label>
        {blockStorage}
      </div>
    );
  }

  if (props.type === "text") {
    return (
      <div className={fullClass}>
        <label className="app-container__title">{props.category}:</label>
        <label className="app-container__desc">{movieLabel}</label>
      </div>
    );
  }

  if (props.type === "img") {
    return (
      <div className={fullClass}>
        <label className="app-container__title">{props.category}:</label>
        <label className="app-container__desc">
          <img className="movie-poster" src={movieLabel} alt="Movie Poster" />
        </label>
      </div>
    );
  }

  return null;
};

const MovieDescription = ({
  movieDb,
  movieFound,
  jsonValid,
  searchAllMovie,
  favouritesAdd,
  favouritesRemove
}) => {
  if (searchAllMovie === true) {
    return null;
  }

  if (movieFound !== true) {
    return (
      <div className="app-container app-container__alert alert-warning fadeOut animated delay-5s">
        No movie found
      </div>
    );
  }
  if (jsonValid !== true) {
    return "No valid JSON";
  }

  if (searchAllMovie === false) {
    return (
      <>
        <div className="app-container ">
          {movieFound === true && (
            <div className="app-container app-container__favourite">
              <label>Favourite:</label>
              <button
                className="app-button"
                movie-id={movieDb["imdbID"]}
                movie-title={movieDb["Title"]}
                movie-year={movieDb["Year"]}
                movie-poster={movieDb["Poster"]}
                onClick={favouritesAdd}
              >
                add
              </button>
            </div>
          )}
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
          <BlockDescription
            inf="15"
            movieDb={movieDb}
            category="Ratings"
            type="ratings"
          />
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default MovieDescription;
