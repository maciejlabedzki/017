import React from "react";

const usePrevious = value => {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const Counter = () => {
  const [value, setValue] = React.useState(0);
  const lastValue = usePrevious(value);

  return (
    <div>
      <p>
        Current: {value} - Previous: {lastValue}
      </p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
      <button onClick={() => setValue(Math.floor(Math.random() * 100))}>
        Random Number
      </button>
    </div>
  );
};

export default Counter;
