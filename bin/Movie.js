import React from "react";

const Movie = props => {
  const info = props.dataJson;

  this.arrayDone = () => {
    let allArray = [];
    for (var key in info) {
      if (
        key !== "Ratings" &&
        key !== "Poster" &&
        info[key] !== "N/A" &&
        key !== "Response"
      ) {
        allArray.push(
          <label className="app-container__description lm_" data-key={key}>
            {key} : {info[key]}
          </label>
        );
      }
      if (key === "Poster" && info[key] !== "N/A") {
        allArray.push(
          <label className="app-container__description lm_">
            <img src={info[key]} />
          </label>
        );
      }
    }

    return <div>{allArray}</div>;
  };

  return (
    <div>
      {this.arrayDone()}
      <label className="app-container__description lm_Poster">
        <img src={info.Poster} />
      </label>
      <label className="app-container__description app-container__title">
        Movie: {info.Title}
      </label>
      <label className="app-container__description lm_Year ">
        Year: {info.Year}
      </label>
      <label className="app-container__description lm_Rated">
        Rated: {info.Rated}
      </label>
      <label className="app-container__description lm_Released">
        Released: {info.Released}
      </label>
      <label className="app-container__description lm_Runtime">
        Runtime: {info.Runtime}
      </label>
      <label className="app-container__description lm_Genre">
        Genre: {info.Genre}
      </label>
      <label className="app-container__description lm_Director">
        Director: {info.Director}
      </label>
      <label className="app-container__description lm_Writer">
        Writer: {info.Writer}
      </label>
      <label className="app-container__description lm_Actors">
        Actors: {info.Actors}
      </label>
      <label className="app-container__description lm_Plot">
        Plot: {info.Plot}
      </label>
      <label className="app-container__description lm_Language">
        Language: {info.Language}
      </label>
      <label className="app-container__description lm_Country">
        Country: {info.Country}
      </label>
      <label className="app-container__description lm_Awards">
        Awards: {info.Awards}
      </label>
      <label className="app-container__description lm_Metascore">
        Metascore: {info.Metascore}
      </label>
      <label className="app-container__description lm_imdbRating">
        imdbRating: {info.imdbRating}
      </label>
      <label className="app-container__description lm_Type">
        Type: {info.Type}
      </label>
      <label className="app-container__description lm_DVD">
        DVD: {info.DVD}
      </label>
      <label className="app-container__description lm_BoxOffice">
        BoxOffice: {info.BoxOffice}
      </label>
      <label className="app-container__description lm_Production">
        Production: {info.Production}
      </label>
      <label className="app-container__description lm_Website">
        Website: {info.Website}
      </label>
    </div>
  );
};

export default Movie;
