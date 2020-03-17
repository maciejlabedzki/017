import React from "react";

class UserFavouriteMovies extends React.Component {
  render() {
    console.log("fav", this.props.favourite);
    return (
      <>
        <div className="app_container">
          UserFavouriteMovies{" "}
          <button onClick={this.props.favouriteRemove}>del</button>
        </div>
      </>
    );
  }
}

export default UserFavouriteMovies;
