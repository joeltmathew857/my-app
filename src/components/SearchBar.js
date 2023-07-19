import React, { useState } from "react";

function ColorChange() {
  const [color, setColor] = useState("blue"); // State for color

  const changeColor = () => {
    setColor("red"); // Change color to red
  };

  return (
    <div>
      <h1 style={{ color: color }}>Color Change Example</h1>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default ColorChange;


