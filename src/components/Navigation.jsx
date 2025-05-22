import React from "react";

function Navigation() {
  return (
    <div className="nav">
      <div className="fading-border-bottom">
        <div className="logo">
          <a href="index.html">
            <img
              className="logoimg"
              src="media/8391302159_7b2a20ef-86a3-440e-a9d1-4597e976ba85.png"
              alt="Logo"
            />
          </a>
        </div>
        <div className="navigation">
          <ul>
            <li className="home">
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#aboutme">About me</a>
            </li>
            <li>
              <a href="#work">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact me</a>
            </li>
          </ul>
        </div>
        <div className="contactlink">
          <a
            href="https://github.com/AbdElrahmanKhattab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="logoimg" src="media/github.png" alt="GitHub" />
          </a>
          <a href="mailto:manaatef123@gmail.com">
            <img className="logoimg" src="media/gemail.png" alt="Email" />
          </a>
          <a
            href="https://www.linkedin.com/in/abdelrahman-khattab-842a3424b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="logoimg" src="media/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
        <div className="btn">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
}

export default Navigation;