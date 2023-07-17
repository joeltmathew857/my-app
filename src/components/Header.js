import React from "react";

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
         <div className="flex items-left">
      <img src="https://images.pexels.com/photos/15222280/pexels-photo-15222280/free-photo-of-blurred-walking-person-on-white-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Logo" className="h-18 w-10" />
    </div>
      <nav className="nav-container">
        <ul className="nav display-flex">
          <li>
            <a href="https://chat.openai.com/?model=text-davinci-002-render-sha">
              Home
            </a>
          </li>
          <li>
            <a href="https://chat.openai.com/?model=text-davinci-002-render-sha">
              About
            </a>
          </li>
          <li>
            <a href="https://chat.openai.com/?model=text-davinci-002-render-sha">
              Contact
            </a>
          </li>
          <li>
            <a href="https://chat.openai.com/?model=text-davinci-002-render-sha">
              Gallery
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
