import React, { useState } from "react";

const ChangeColor = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-black">Count: {count}</h2>
      <div className="mt-8">
        <div className="flex mt-4">
          <button
            className="px-4 py-2 mr-4 bg-gray-500 text-white rounded"
            onClick={incrementCount}
          >
            Increment Count
          </button>
          <button
            className="px-4 py-2 mr-4 bg-gray-500 text-white rounded"
            onClick={decrementCount}
          >
            Decrement Count
          </button>
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded"
            onClick={resetCount}
          >
            Reset Count
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeColor;
