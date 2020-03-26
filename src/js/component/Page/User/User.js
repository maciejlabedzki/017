import React from "react";

class User extends React.Component {
  render() {
    let userDetails = this.props["user"]["results"][0];
    return (
      <React.Fragment>
        <div className="app-container app_user ">
          {this.props.statusLogin === false && (
            <>
              <p>Page visible for sign in users.</p>
            </>
          )}
          {this.props.statusLogin === true && (
            <>
              <div className="page-user-details">
                <label className="app-container__title">picture:</label>
                <label>
                  large:
                  <img
                    src={userDetails["picture"]["large"]}
                    alt="User Large  "
                  />
                </label>
                <label>
                  medium:
                  <img
                    src={userDetails["picture"]["medium"]}
                    alt="User Medium  "
                  />
                </label>
                <label>
                  thumbnail:
                  <img
                    src={userDetails["picture"]["thumbnail"]}
                    alt="User Thumbnail  "
                  />
                </label>
              </div>
              <div className="page-user-details">
                <label className="app-container__title">Gender:</label>
                <label>{userDetails["gender"]}</label>
              </div>
              <div className="page-user-details">
                <label className="app-container__title">Full name:</label>
                <label>
                  {userDetails["name"]["title"]} {userDetails["name"]["first"]}{" "}
                  {userDetails["name"]["last"]}
                </label>
              </div>
              <div className="page-user-details">
                <label className="app-container__title">Location:</label>
                <label>street : {userDetails["location"]["street"]}</label>
                <label> city: {userDetails["location"]["city"]}</label>
                <label> state: {userDetails["location"]["state"]}</label>
                <label> postcode: {userDetails["location"]["postcode"]}</label>
              </div>
              <div className="page-user-details">
                <label className="app-container__title">Coordinates:</label>
                <label>
                  [{userDetails["location"]["coordinates"]["latitude"]}
                  {" , "}
                  {userDetails["location"]["coordinates"]["longitude"]}]
                </label>
              </div>

              <div className="page-user-details">
                <label className="app-container__title">timezone:</label>
                <label>
                  {userDetails["location"]["timezone"]["offset"]}
                  {" , "}
                  {userDetails["location"]["timezone"]["description"]}
                </label>
              </div>

              <div className="page-user-details">
                <label className="app-container__title">email:</label>
                <label>{userDetails["email"]}</label>
              </div>

              <div className="page-user-details">
                <label className="app-container__title">id:</label>
                <label>
                  {userDetails["id"]["name"]}
                  {userDetails["id"]["value"]}
                </label>
              </div>

              <div className="page-user-details">
                <label className="app-container__title">phone:</label>
                <label>{userDetails["phone"]}</label>
              </div>

              <div className="page-user-details">
                <label className="app-container__title">cell:</label>
                <label>{userDetails["cell"]}</label>
              </div>
              <div className="page-user-details">
                <label className="app-container__title">nat:</label>
                <label>{userDetails["nat"]}</label>
              </div>

              <div className="page-user-details">
                <label className="app-container__title">registered:</label>
                <label>Date: {userDetails["registered"]["date"]} </label>
                <label>Age: {userDetails["registered"]["age"]}</label>
              </div>

              <div className="page-user-details">
                <label className="app-container__title">login:</label>
                <label>uuid:{userDetails["login"]["uuid"]} </label>
                <label>username:{userDetails["login"]["username"]} </label>
                <label>password:{userDetails["login"]["password"]} </label>
                <label>salt:{userDetails["login"]["salt"]} </label>
                <label>md5:{userDetails["login"]["md5"]} </label>
                <label>sha1:{userDetails["login"]["sha1"]} </label>
                <label>sha256:{userDetails["login"]["sha256"]} </label>
              </div>
            </>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default User;
