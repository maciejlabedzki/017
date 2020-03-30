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
  return (
    <React.Fragment>
      <div className="app-container app_landing">
        <p>Welcome. On this PLAYGROUND site you can.</p>

        <ul>
          <li>
            Register new user [ Allow: Guest , User , Admin ]
            <img src={img_Landing_2} alt="page 2" />
          </li>
          <li>
            Delete users by email adress [ Allow: - , - , Admin ]
            <img src={img_Landing_3} alt="page 3" />
          </li>
          <li>
            Go to favourite page [ Allow: - , User , Admin ]
            <img src={img_Landing_4} alt="page 4" />
          </li>
          <li>
            Go to fictional user page [ Allow: - , User , Admin ]
            <img src={img_Landing_5} alt="page 5" />
          </li>
          <li>
            Go to features page with some test modules that could be use in the
            future [ Allow: Guest , User , Admin ]
            <img src={img_Landing_6} alt="page 6" />
          </li>
          <li>
            Go to contact page [ Allow: Guest , User , Admin ]
            <img src={img_Landing_7} alt="page 7" />
          </li>
          <li>
            Go to search page [ Allow: Guest , User , Admin ]
            <img src={img_Landing_8} alt="page 8" />
          </li>

          <li>
            Go to home page [ Allow: Guest , User , Admin ]
            <img src={img_Landing_9} alt="page 9" />
          </li>

          <li>
            Use dev tool to inspect state and process environment [ Allow: - , -
            , Admin ]
            <img src={img_Landing_10} alt="page 10" />
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Landing;
