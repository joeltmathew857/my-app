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
      <img className="h-8 w-8" src="https://images.unsplash.com/photo-1689240766231-6d9b33f1a899?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Logo" />
        <ul className="nav display-flex">
          <li><a href="https://chat.openai.com/?model=text-davinci-002-render-sha">Home</a></li>
          <li><a href="https://chat.openai.com/?model=text-davinci-002-render-sha">About</a></li>
          <li><a href="https://chat.openai.com/?model=text-davinci-002-render-sha">Contact</a></li>
          <li><a href="https://chat.openai.com/?model=text-davinci-002-render-sha">Gallery</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
