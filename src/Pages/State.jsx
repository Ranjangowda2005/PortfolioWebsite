import React, { useState } from "react";
import { useEffect } from "react";

const State = () => {
  const [state, setState] = useState(0);
  useEffect(() => {
    console.log("State Changing");
  }, [state]);

  const handleIncrement = () => {
    console.log("Increment button clicked");
    setState(state + 1);
  };

  const [Data, setData] = useState(0);

  const handleDecrement = () => {
    console.log("Decrement button clicked");
    setData(Data - 1);
  };

  return (
    <div>
      <p className="text-7xl">{state}</p>
      <button onClick={handleIncrement}>Increment</button>

      <p className="text-7xl">{Data}</p>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default State;
