import React, { useState, useEffect } from "react";

const ColorChange = () => {
  const [color, setColor] = useState("green"); // State for color

  const changeColor = () => {
    if (color === "green") {
      setColor("yellow");
    } else if (color === "yellow") {
      setColor("blue");
    } else if (color === "blue") {
      setColor("red");
    } else {
      setColor("green");
    }
  };

  const resetColor = () => {
    setColor("green");
  };

  const generateRandomColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  const getColorName = () => {
    switch (color) {
      case "green":
        return "Green";
      case "yellow":
        return "Yellow";
      case "blue":
        return "Blue";
      case "red":
        return "Red";
      default:
        return "";
    }
  };

  useEffect(() => {
    // Perform any side effects or subscriptions here
    // This effect runs only once after the initial render

    // Cleanup function (optional)
    return () => {
      // Perform cleanup here
      // This function is called when the component is unmounted
    };
  }, []); // Empty dependency array means the effect runs only once

  return (
    <div>
      <h1 className="text-4xl font-bold">{getColorName()}</h1>
      <div className={`w-20 h-20 rounded bg-${color}`}></div>
      <div className="flex mt-4">
        <button
          className="px-4 py-2 mr-2 bg-gray-500 text-white rounded"
          onClick={changeColor}
        >
          Change Color
        </button>
        <button
          className="px-4 py-2 mr-2 bg-gray-500 text-white rounded"
          onClick={resetColor}
        >
          Reset Color
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded"
          onClick={generateRandomColor}
        >
          Random Color
        </button>
      </div>
    </div>
  );
};

export default ColorChange;
