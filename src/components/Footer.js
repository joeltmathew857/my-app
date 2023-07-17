import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <h2>This is the footer</h2>
      <p>&copy; {year} Your Website. All rights reserved.</p>
      <div className="icon-container"></div>
      <ul>
        <li>
          <a href="https://www.apple.com/">Home</a>
        </li>
      </ul>
      <div className="space-x-4">
        <FontAwesomeIcon icon={faEnvelope} className="inline-block text-2xl" />
        <FontAwesomeIcon icon={faInstagram} className="inline-block text-2xl" />
        <FontAwesomeIcon icon={faFacebook} className="inline-block text-2xl" />
      </div>
    </div>
  );
}

export default Footer;
