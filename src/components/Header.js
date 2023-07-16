import React from 'react';

const Header = () => {
  let time = new Date();
  let hours = time.getHours();
  let mode; // Declare the mode variable
  console.log(hours);
  if (hours > 18) {
    mode = "nightMode";
  } else if (hours < 18) {
    mode = "dayMode";
  }
  
  return (
    <header className={`display-flex ${mode}`}>
      <nav className="nav-container">
      <a href="https://codesandbox.io/s/cool-rhodes-3k96p5?file=/src/App.js" className="logo left" style={{ color: "white", fontSize: "20px" }}>Logo</a>
        <ul className="nav display-flex">
          <li><a href="https://chat.openai.com/?model=text-davinci-002-render-sha">Home</a></li>
          <li><a href="https://chat.openai.com/?model=text-davinci-002-render-sha">About</a></li>
          <li><a href="https://chat.openai.com/?model=text-davinci-002-render-sha">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

