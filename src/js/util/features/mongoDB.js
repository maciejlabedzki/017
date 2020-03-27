import React from "react";

class MongoSample extends React.Component {
  //   handleAccess = () => {
  //     const MongoClient = require("mongodb").MongoClient;
  //     const uri =
  //       "mongodb+srv://admin_1:Aa123456@cluster0-nrqtl.mongodb.net/test";
  //     const client = new MongoClient(uri, { useNewUrlParser: true });
  //     client.connect(err => {
  //       const collection = client.db("test").collection("devices");
  //       // perform actions on the collection object
  //       client.close();
  //     });
  //   };

  render() {
    return (
      <React.Fragment>
        Render Mongo DB
        {/* <button onClick={this.handleAccess}>Mongo DB</button> */}
      </React.Fragment>
    );
  }
}

export default MongoSample;
