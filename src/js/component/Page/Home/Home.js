import React from "react";

const Home = props => {
  return (
    <React.Fragment>
      <div className="app_container app_home">
        <label className="icon-home">Home</label>
        <ul>
          <li>Search movies</li>
          <li>
            User Account [ login , password ]
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
          <li></li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Home;
