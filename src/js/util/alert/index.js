import React from "react";

class Alert extends React.Component {
  alertMessagesUpdate = alertMessages => {
    this.setState({ alertMessages });
  };

  alertMessagesShow = message => {
    return (
      <div className="alert" status="good">
        {message}
      </div>
    );
  };
}

export default Alert;
