import React, { useState } from "react";
import "./Counter.scss";

const Counter = () => {
  const [index, setIndex] = useState(0);

  const handleDecrementButtonClick = () => {
    setIndex(index - 1);
  };

  const handleIncrementButtonClick = () => {
    setIndex(index + 1);
  };

  return (
    <div className="counter">
      <button onClick={handleDecrementButtonClick}>Decrement</button>
      <span>{index}</span>
      <button onClick={handleIncrementButtonClick}>Increment</button>
    </div>
  );
};

export default Counter;
