import React, { useState } from "react";

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

  const getColorStyles = () => {
    switch (color) {
      case "green":
        return "bg-green-500 text-white";
      case "yellow":
        return "bg-yellow-500 text-black";
      case "blue":
        return "bg-blue-500 text-white";
      case "red":
        return "bg-red-500 text-white";
      default:
        return "";
    }
  };

  return (
    <div>
      <h1 className={`text-3xl font-bold ${getColorStyles()}`}>{color}</h1>
      <button
        className="px-4 py-2 mt-4 bg-gray-500 text-white rounded"
        onClick={changeColor}
      >
        Change Color
      </button>
    </div>
  );
};

export default ColorChange;
