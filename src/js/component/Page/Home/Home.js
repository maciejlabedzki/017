import React from "react";

const Home = props => {
  return (
    <React.Fragment>
      <div className="app_container app_home">
        <label className="icon-home">Home</label>
        <ul>
          <li>
            Search
            <ul>
              <li>By title all that is close matching</li>
              <li>By title and year</li>
              <li>By ID from imdb : "tt********"</li>
              <li>By title match first</li>
              <li>By offline example</li>
            </ul>
          </li>
          <li>
            User Account
            <ul>
              <li>Favourite</li>
            </ul>
          </li>
          <li>
            Admin Account
            <ul>
              <li>delete users</li>
              <li>inspect all users</li>
            </ul>
          </li>
          <li>Register</li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Home;
