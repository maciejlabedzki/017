import React from "react";

import imgNoPoster from "../../../../assets/img/no-poster.jpg";

import axios from "axios";

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
  constructor(props) {
    super(props);
    this.state = {
      id: undefined,
      movies: undefined,
      ready: false,
      url: process.env.REACT_APP_REGISTER_FAVOURITES
    };
  }

  jsonApiGet = async () => {
    console.log("ask");
    if (this.state.id === undefined) {
      return false;
    }

    console.log("ask");
    var url = this.state.url + "/" + this.state.id;
    await axios
      .get(url)
      .then(response => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);

        this.setState({ movies: response.data.movies, ready: true }, () => {});
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    console.log("yes, favourite");

    var id = this.props.userID["id"];
    this.setState({ id: id }, () => {
      this.jsonApiGet();
    });
  }
  show = () => {
    console.log(this.state);
  };

  componentWillUpdate() {
    // var id = this.props.userID["id"];
    // this.setState({ id: id }, () => {
    //   this.jsonApiGet();
    // });
  }

  render() {
    return (
      <div className="app_container">
        Favourites
        <button onClick={this.show}>aaa</button>
        {this.props.statusLogin === true && this.state.ready === true && (
          <MoviesFavourite
            showMovie={this.props.showMovie}
            movies={this.state.movies}
            favouriteRemove={this.props.favouriteRemove}
          />
        )}
        {this.props.statusLogin === false && (
          <>
            <p>Please login to see that page</p>
            <p>Login: admin</p>
            <p>Password: admin</p>
          </>
        )}
        {/* <button onClick={this.props.favouriteRemove}>del</button> */}
      </div>
    );
  }
}

export default Favourite;
