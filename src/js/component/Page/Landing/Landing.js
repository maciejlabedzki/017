import React from "react";

import img_Landing_1 from "../../../../assets/img/landing/1.png";
import img_Landing_2 from "../../../../assets/img/landing/2.png";
import img_Landing_3 from "../../../../assets/img/landing/3.png";
import img_Landing_4 from "../../../../assets/img/landing/4.png";
import img_Landing_5 from "../../../../assets/img/landing/5.png";
import img_Landing_6 from "../../../../assets/img/landing/6.png";
import img_Landing_7 from "../../../../assets/img/landing/7.png";
import img_Landing_8 from "../../../../assets/img/landing/8.png";
import img_Landing_9 from "../../../../assets/img/landing/9.png";
import img_Landing_10 from "../../../../assets/img/landing/10.png";

const Landing = props => {
  //buildLandingBlockDescription = () => {};

  return (
    <React.Fragment>
      <div className="app-container app_landing">
        <div className="app-container__landing">
          <p>Welcome. </p>

          <p>This is testing site. Go to git repository:</p>

          <p>
            <a href="https://github.com/maciejlabedzki/017">
              https://github.com/maciejlabedzki/017
            </a>
          </p>
          <hr />
          <p>Clone and install. Run testing server:</p>

          <p>
            <code>json-server --watch src/data/json/test.json --port 3333</code>
          </p>
          <hr />
          <p>On this site you can now login as user: and admin.</p>

          <p>
            User login: <strong>user@user.com</strong>{" "}
          </p>
          <p>
            User password:<strong> UserTest</strong>{" "}
          </p>
          <hr />
          <p>On this site you can now login as admin:</p>
          <p>
            Admin login:<strong> admin@admin.com</strong>{" "}
          </p>
          <p>
            Admin password: <strong>AdminTest</strong>{" "}
          </p>
        </div>
        <hr />

        <ul>
          <li>
            <label className="app-container__title">
              Go to page all users[ Allow: - , - , Admin ]
            </label>
            <img src={img_Landing_1} alt="page 1" />
          </li>
          <li>
            <label className="app-container__title">
              Register new user [ Allow: Guest , User , Admin ]
            </label>
            <img src={img_Landing_2} alt="page 2" />
          </li>
          <li>
            <label className="app-container__title">
              Delete users by email adress [ Allow: - , - , Admin ]
            </label>
            <img src={img_Landing_3} alt="page 3" />
          </li>
          <li>
            <label className="app-container__title">
              Go to favourite page [ Allow: - , User , Admin ]
            </label>
            <img src={img_Landing_4} alt="page 4" />
          </li>
          <li>
            <label className="app-container__title">
              Go to fictional user page [ Allow: - , User , Admin ]
            </label>
            <img src={img_Landing_5} alt="page 5" />
          </li>
          <li>
            <label className="app-container__title">
              Go to features page with some test modules that could be use in
              the future [ Allow: Guest , User , Admin ]
            </label>
            <img src={img_Landing_6} alt="page 6" />
          </li>
          <li>
            <label className="app-container__title">
              Go to contact page [ Allow: Guest , User , Admin ]
            </label>
            <img src={img_Landing_7} alt="page 7" />
          </li>
          <li>
            <label className="app-container__title">
              Go to search page [ Allow: Guest , User , Admin ]
            </label>
            <img src={img_Landing_8} alt="page 8" />
          </li>

          <li>
            <label className="app-container__title">
              Go to home page [ Allow: Guest , User , Admin ]
            </label>
            <img src={img_Landing_9} alt="page 9" />
          </li>

          <li>
            <label className="app-container__title">
              Use dev tool to inspect state and process environment [ Allow: - ,
              - , Admin ]
            </label>
            <img src={img_Landing_10} alt="page 10" />
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Landing;
