import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="wave">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(53,134,255,0.7)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(53,134,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(53,134,255,0.3)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="7"
              fill="#3586ff"
            />
          </g>
        </svg>
      </div>
      <ul className="social-icon">
        <li className="social-icon__item">
          <a className="social-icon__link" href="mailto:manaatef123@gmail.com">
            <ion-icon name="mail-outline"></ion-icon>
          </a>
        </li>
        <li className="social-icon__item">
          <a
            className="social-icon__link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/abdelrahman-khattab-842a3424b/"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li className="social-icon__item">
          <a
            className="social-icon__link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/AbdElrahmanKhattab"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </li>
      </ul>
      <ul className="menu">
        <li className="menu__item">
          <a className="menu__link" href="#home">
            Home
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#aboutme">
            About
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#work">
            Projects
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
      <p>A.M.Y | All Rights Reserved</p>
    </footer>
  );
}

export default Footer;