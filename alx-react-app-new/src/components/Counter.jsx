import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }
  return (
    <div>
      <p>Number of Counts: {count} </p>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={decreaseCount}>Decrease Count</button>
    </div>
  );
}
