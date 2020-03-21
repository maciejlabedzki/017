import React from "react";

const Contact = props => {
  return (
    <React.Fragment>
      <div className="app_container app_contact">
        <label className="icon-home">Contact</label>
        <p>
          Lorem Ipsum Press is licensed by Bionetwork Ltd. Our office is located
          within the company's building.
        </p>
        <p>
          <img
            src="https://d26d74ht2k6aj1.cloudfront.net/images/street-map-sample.png"
            alt="location"
          />
        </p>
        <p>
          <label>Address: </label>
          <label>Keas 69 Str.</label>
          <label>15234, Chalandri</label>
          <label>Athens,</label>
          <label>Greece</label>
        </p>
        <div>
          <ul>
            <li>email:example@mail.to</li>
            <li>tel:606-500-500</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
