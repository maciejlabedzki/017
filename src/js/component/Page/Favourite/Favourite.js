import React from "react";
import imgNoPoster from "../../../../assets/img/no-poster.jpg";

const MoviesFavourite = props => {
  var moviesDB = props.movies;
  var moviesList = [];

  for (var key in moviesDB) {
    let randomKey = "id_moviesDB_" + Math.random();
    let title = moviesDB[key]["title"];
    let poster = moviesDB[key]["poster"];
    let year = moviesDB[key]["year"];
    let id = key;
    //console.log(id);
    let img = <img src={imgNoPoster} alt="No Poster Movies" />;
    if (poster !== "N/A") {
      img = <img src={poster} alt="Movies" />;
    }

    moviesList.push(
      <div className="app-fav-page-wrapper app_container" key={randomKey}>
        <div className="app-fav-page afp-img">{img}</div>
        <div className="app-fav-page afp-desc">
          <label id={id} onClick={props.showMovie} className="afp-desc-title">
            {title}
          </label>
          <label className="afp-desc-year">{year}</label>
        </div>
        <div className="app-fav-page afp-remove">
          <button movieid={id} onClick={props.favouriteRemove}>
            Remove
          </button>
        </div>
      </div>
    );
  }
  return <div> {moviesList}</div>;
};

class Favourite extends React.Component {
  render() {
    //console.log("fav", this.props.favourite);
    return (
      <>
        <div className="app_container">
          UserFavouriteMovies{" "}
          {this.props.statusLogin === true && (
            <MoviesFavourite
              showMovie={this.props.showMovie}
              movies={this.props.favourite}
              favouriteRemove={this.props.favouriteRemove}
            />
          )}
          {this.props.statusLogin === false && (
            <React.Fragment>
              <div className="app_container">
                <p>Please login to see that page</p>
                <p>Login: admin</p>
                <p>Password: admin</p>
              </div>
            </React.Fragment>
          )}
          {/* <button onClick={this.props.favouriteRemove}>del</button> */}
        </div>
      </>
    );
  }
}

export default Favourite;
