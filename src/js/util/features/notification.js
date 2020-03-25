import React from "react";

function Notification(props) {
  const [isShown, setIsShown] = React.useState(false);
  const [isLeaving, setIsLeaving] = React.useState(false);

  let timeoutId = null;

  React.useEffect(() => {
    setIsShown(true);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [props.isShown, props.timeout, timeoutId]);

  const closeNotification = () => {
    setIsLeaving(true);
    timeoutId = setTimeout(() => {
      console.log("something");
      setIsLeaving(false);
      setIsShown(false);
    }, 250);
  };

  return (
    isShown && (
      <div
        className={`app-notification alert ${props.type}${
          isLeaving ? " leaving" : ""
        }`}
        role="alert"
      >
        <button className="close" onClick={closeNotification} />
        {props.message}
      </div>
    )
  );
}

export default Notification;
