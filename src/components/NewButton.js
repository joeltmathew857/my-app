import React, { useState } from "react";

const MathButton = () => {
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
      <div className="w-64 h-64 bg-gray-200 rounded-lg shadow-lg flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-black">Count: {count}</h2>
        <div className="mt-8">
          <div className="flex mt-4">
            <button
              className="px-4 py-2 mr-4 bg-gray-500 text-white rounded"
              onClick={incrementCount}
            >
              Increment
            </button>
            <button
              className="px-4 py-2 mr-4 bg-gray-500 text-white rounded"
              onClick={decrementCount}
            >
              Decrement
            </button>
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded"
              onClick={resetCount}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MathButton;
