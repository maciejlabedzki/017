import React from "react";

const useClickInside = (ref, callback) => {
  const handleClick = e => {
    if (ref.current && ref.current.contains(e.target)) {
      callback();
    }
  };
  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

const ClickBox = ({ onClickInside }) => {
  const clickRef = React.useRef();
  useClickInside(clickRef, onClickInside);
  return (
    <div
      className="click-box"
      ref={clickRef}
      style={{
        border: "2px dashed orangered",
        height: 100,
        width: 100 + "%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <p>Click inside this element</p>
    </div>
  );
};

export default ClickBox;
