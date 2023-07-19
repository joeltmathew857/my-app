import React, { useState } from "react";

const MathButton = () => {
  const [count, setCount] = useState(0);

  const updateCount = (value) => {
    setCount((prevCount) => prevCount + value);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="w-80 h-80 bg-gray-200 rounded-lg shadow-lg flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-black">Count: {count}</h2>
        <div className="mt-8">
          <div className="flex mt-4">
            <button
              className="px-2 py-1 mr-4 bg-green-500 text-white rounded"
              onClick={() => updateCount(1)}
            >
              Increment
            </button>
            <button
              className="px-2 py-1 mr-4 bg-red-500 text-white rounded"
              onClick={() => updateCount(-1)}
            >
              Decrement
            </button>
            <button
              className="px-2 py-1 bg-gray-500 text-white rounded"
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
