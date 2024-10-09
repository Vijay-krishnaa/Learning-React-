import React, { useState } from "react";

function Child2() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <button onClick={increment}>Increment</button>
      <b> {count}</b>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default Child2;
