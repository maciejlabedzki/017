import React from "react";

const MovieStatic = props => {
  const info = props.dataJson;
  return (
    <>
      <label className="label_movie lm_Poster">
        <img src={info.Poster} />
      </label>
      <label className="label_movie lm_title">Movie: {info.Title}</label>
      <label className="label_movie lm_Year ">Year: {info.Year}</label>
      <label className="label_movie lm_Rated">Rated: {info.Rated}</label>
      <label className="label_movie lm_Released">
        Released: {info.Released}
      </label>
      <label className="label_movie lm_Runtime">Runtime: {info.Runtime}</label>
      <label className="label_movie lm_Genre">Genre: {info.Genre}</label>
      <label className="label_movie lm_Director">
        Director: {info.Director}
      </label>
      <label className="label_movie lm_Writer">Writer: {info.Writer}</label>
      <label className="label_movie lm_Actors">Actors: {info.Actors}</label>
      <label className="label_movie lm_Plot">Plot: {info.Plot}</label>
      <label className="label_movie lm_Language">
        Language: {info.Language}
      </label>
      <label className="label_movie lm_Country">Country: {info.Country}</label>
      <label className="label_movie lm_Awards">Awards: {info.Awards}</label>
      <label className="label_movie lm_Metascore">
        Metascore: {info.Metascore}
      </label>
      <label className="label_movie lm_imdbRating">
        imdbRating: {info.imdbRating}
      </label>
      <label className="label_movie lm_Type">Type: {info.Type}</label>
      <label className="label_movie lm_DVD">DVD: {info.DVD}</label>
      <label className="label_movie lm_BoxOffice">
        BoxOffice: {info.BoxOffice}
      </label>
      <label className="label_movie lm_Production">
        Production: {info.Production}
      </label>
      <label className="label_movie lm_Website">Website: {info.Website}</label>
    </>
  );
};

export default MovieStatic;
