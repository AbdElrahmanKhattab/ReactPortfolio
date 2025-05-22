import React, { useEffect, useRef } from "react";

function Hero() {
  const gridWrapperRef = useRef(null);

  // Generate grid boxes once on mount
  useEffect(() => {
    const gridWrapper = gridWrapperRef.current;
    if (gridWrapper && gridWrapper.childNodes.length < 200) {
      for (let i = 0; i < 206; i++) {
        const box = document.createElement('div');
        box.className = 'background-grid_box';
        gridWrapper.appendChild(box);
      }
    }
  }, []);

  // Cube animation on mouse move
  useEffect(() => {
    const cube = document.querySelectorAll(".cube");
    const cuberev = document.querySelectorAll(".cuberev");

    function transform(element, x, y) {
      element.style.transform = `translate3d(${x / 330}rem, ${y / 330}rem, 0px) scale3d(1, 1, 1) rotateX(${-y / 18}deg) rotateY(${x / 14}deg) rotateZ(0deg) skew(0deg, 0deg)`;
    }
    function transformrev(element, x, y) {
      element.style.transform = `translate3d(${-x / 330}rem, ${-y / 330}rem, 0px) scale3d(1, 1, 1) rotateX(${y / 18}deg) rotateY(${-x / 14}deg) rotateZ(0deg) skew(0deg, 0deg)`;
    }
    const handler = (e) => {
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      cube.forEach(el => transform(el, x, y));
      cuberev.forEach(el => transformrev(el, x, y));
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div className="hero-section" id="home">
      <div className="hero_image-container">
        <div className="background-grid_wrapper">
          <div
            className="background-grid_box-wrapper"
            ref={gridWrapperRef}
          >
            <div className="bakground-grid_overlay"></div>
          </div>
        </div>
      </div>
      <div className="hero-section-content">
        {/* Hero Cubes Animation */}
        <div className="hero-section-cubes">
          <div className="hero_cubes-wrapper pointer-events-off" style={{ opacity: 1 }}>
            {/* Cube 1 - .cuberev */}
            <div className="hero_cubes_item is-1 cuberev"
                 style={{
                   transform: "translate3d(0.5003rem, 0.9996rem, 0px) scale3d(1, 1, 1) rotateX(-0.993deg) rotateY(-0.007deg) rotateZ(0deg) skew(0deg, 0deg)",
                   transformStyle: "preserve-3d",
                   willChange: "transform"
                 }}>
              <div className="hero_cubes_side"></div>
              <div className="hero_cubes_side is-top"></div>
              <div className="hero_cubes_side is-left"></div>
              <div className="hero_cubes_side is-right"></div>
              <div className="hero_cubes_side is-front">
                <div className="hero_cubes_embed-icon w-embed">
                  {/* SVG ICON */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 80 80"
                    fill="none"
                    preserveAspectRatio="xMidYMid meet"
                    aria-hidden="true"
                    role="img"
                  >
                    <path
                      d="M57.8919 30.4517L52.1094 48.7476C52.1094 47.3464 48.1215 17 48.1215 17C38.9492 17 34.084 23.5257 31.5317 30.4517L24.4731 48.7876C24.4731 47.4665 23.4761 30.6118 23.4761 30.6118C23.1357 26.9631 21.4741 23.5665 18.8062 21.0653C16.1383 18.564 12.6493 17.1318 9 17.04L16.4973 63C26.0683 63 31.2526 56.4743 33.9245 49.5483L39.9063 33.9347C39.9063 34.5753 43.8943 63 43.8943 63C47.808 62.995 51.6184 61.7389 54.7733 59.4139C57.9282 57.0889 60.2636 53.8157 61.4411 50.0688L75 17C65.429 17 60.4042 23.5257 57.852 30.4517H57.8919Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="hero_cubes_side is-back"></div>
            </div>
            {/* Cube 2 - .cube */}
            <div className="hero_cubes_item is-2 cube"
                 style={{
                   transform: "translate3d(0.5003rem, 0.9996rem, 0px) scale3d(1, 1, 1) rotateX(-0.993deg) rotateY(-0.007deg) rotateZ(0deg) skew(0deg, 0deg)",
                   transformStyle: "preserve-3d",
                   willChange: "transform"
                 }}>
              <div className="hero_cubes_side"></div>
              <div className="hero_cubes_side is-top"></div>
              <div className="hero_cubes_side is-left"></div>
              <div className="hero_cubes_side is-right"></div>
              <div className="hero_cubes_side is-front">
                <div className="hero_cubes_embed-icon w-embed">
                  {/* SVG ICON */}
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 150 150"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="75"
                      cy="75"
                      r="56"
                      stroke="url(#paint0_linear_340_612)"
                      stroke-width="8"
                    ></circle>
                    <path
                      d="M49.5474 90V65.2259H48.8115L44.9687 74.3016H39.4906L45.3366 61.383H54.7802V90H49.5474ZM70.73 90.5723C67.3505 90.5723 64.6387 89.6457 62.5946 87.7924C60.5505 85.9119 59.5285 83.0774 59.5285 79.2891V72.094C59.5285 68.4146 60.5505 65.6211 62.5946 63.7133C64.6387 61.7782 67.3505 60.8107 70.73 60.8107C74.1368 60.8107 76.8486 61.7782 78.8654 63.7133C80.9095 65.6211 81.9315 68.4146 81.9315 72.094V79.2891C81.9315 83.0774 80.9095 85.9119 78.8654 87.7924C76.8486 89.6457 74.1368 90.5723 70.73 90.5723ZM70.73 85.9119C72.7741 85.9119 74.2731 85.3532 75.227 84.2357C76.2081 83.1183 76.6987 81.5239 76.6987 79.4526V71.8487C76.6987 69.7501 76.1536 68.1694 75.0634 67.1064C74.0005 66.0163 72.556 65.4712 70.73 65.4712C68.8495 65.4712 67.3777 66.0299 66.3148 67.1473C65.2792 68.2647 64.7613 69.8319 64.7613 71.8487V79.4526C64.7613 81.6057 65.2519 83.2273 66.2331 84.3175C67.2415 85.3804 68.7404 85.9119 70.73 85.9119ZM97.239 90.5723C93.8595 90.5723 91.1477 89.6457 89.1036 87.7924C87.0595 85.9119 86.0375 83.0774 86.0375 79.2891V72.094C86.0375 68.4146 87.0595 65.6211 89.1036 63.7133C91.1477 61.7782 93.8595 60.8107 97.239 60.8107C100.646 60.8107 103.358 61.7782 105.374 63.7133C107.418 65.6211 108.44 68.4146 108.44 72.094V79.2891C108.44 83.0774 107.418 85.9119 105.374 87.7924C103.358 89.6457 100.646 90.5723 97.239 90.5723ZM97.239 85.9119C99.2831 85.9119 100.782 85.3532 101.736 84.2357C102.717 83.1183 103.208 81.5239 103.208 79.4526V71.8487C103.208 69.7501 102.663 68.1694 101.572 67.1064C100.51 66.0163 99.065 65.4712 97.239 65.4712C95.3585 65.4712 93.8867 66.0299 92.8238 67.1473C91.7882 68.2647 91.2703 69.8319 91.2703 71.8487V79.4526C91.2703 81.6057 91.7609 83.2273 92.7421 84.3175C93.7505 85.3804 95.2494 85.9119 97.239 85.9119Z"
                      fill="url(#paint1_linear_340_612)"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_340_612"
                        x1="15"
                        y1="15"
                        x2="130.5"
                        y2="133"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white"></stop>
                        <stop offset="1" stop-color="#D6D6D6"></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_340_612"
                        x1="39"
                        y1="50"
                        x2="86.1943"
                        y2="116.76"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white"></stop>
                        <stop offset="1" stop-color="#D6D6D6"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  
                </div>
              </div>
              <div className="hero_cubes_side is-back"></div>
            </div>
            {/* Cube 3 - .cube */}
            <div className="hero_cubes_item is-3 cube"
                 style={{
                   transform: "translate3d(0.5003rem, 0.9996rem, 0px) scale3d(1, 1, 1) rotateX(-0.993deg) rotateY(-0.007deg) rotateZ(0deg) skew(0deg, 0deg)",
                   transformStyle: "preserve-3d",
                   willChange: "transform"
                 }}>
              <div className="hero_cubes_side"></div>
              <div className="hero_cubes_side is-top"></div>
              <div className="hero_cubes_side is-left"></div>
              <div className="hero_cubes_side is-right"></div>
              <div className="hero_cubes_side is-front">
                <div className="hero_cubes_embed-icon w-embed">
                  {/* SVG ICON */}
                  <svg
                    alt="Rocket icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 150 150"
                    fill="none"
                  >
                    <path
                      d="M59.2241 38.7621C46.6765 52.8442 38.0654 73.0757 37.2658 74.982L15 65.4504L39.9107 40.5454C42.8015 37.6552 46.9841 36.3639 51.0436 37.1633L59.2241 38.7621ZM71.4027 104.253C71.4027 104.253 94.4066 94.7215 107.631 81.5003C140.845 48.2937 135.309 22.3433 133.526 16.5013C127.682 14.6565 101.726 9.18358 68.5118 42.3903C55.2876 55.6114 45.7539 78.6101 45.7539 78.6101L71.4027 104.253ZM111.26 90.7859C97.1744 103.331 76.9384 111.94 75.0316 112.739L84.5653 135L109.476 110.095C112.367 107.205 113.659 103.023 112.859 98.9646L111.26 90.7859ZM58.0555 110.402C58.0555 115.506 55.9642 120.118 52.6428 123.439C45.3849 130.695 15 135 15 135C15 135 19.3055 104.622 26.5635 97.3658C29.1394 94.777 32.4267 93.0118 36.008 92.2946C39.5893 91.5773 43.303 91.9401 46.6776 93.3371C50.0522 94.7341 52.9354 97.1022 54.9612 100.141C56.9871 103.179 58.0641 106.751 58.0555 110.402ZM82.6586 55.058C82.6586 48.2937 88.1943 42.7592 94.9602 42.7592C101.726 42.7592 107.262 48.2937 107.262 55.058C107.262 61.8223 101.726 67.3568 94.9602 67.3568C88.1943 67.3568 82.6586 61.8223 82.6586 55.058Z"
                      fill="currentColor"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_613_314"
                        x1="15"
                        y1="15"
                        x2="130.5"
                        y2="133"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white"></stop>
                        <stop offset="1" stop-color="#D6D6D6"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="hero_cubes_side is-back"></div>
            </div>
            {/* Cube 4 - .cuberev */}
            <div className="hero_cubes_item is-4 cuberev"
                 style={{
                   transform: "translate3d(0.5003rem, 0.9996rem, 0px) scale3d(1, 1, 1) rotateX(-0.993deg) rotateY(-0.007deg) rotateZ(0deg) skew(0deg, 0deg)",
                   transformStyle: "preserve-3d",
                   willChange: "transform"
                 }}>
              <div className="hero_cubes_side"></div>
              <div className="hero_cubes_side is-top"></div>
              <div className="hero_cubes_side is-left"></div>
              <div className="hero_cubes_side is-right"></div>
              <div className="hero_cubes_side is-front">
                <div className="hero_cubes_embed-icon w-embed">
                  {/* SVG ICON */}
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 150 150"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M56.3759 88.8621C56.3759 88.8621 53.9687 76.638 57.3764 52.3541C62.0767 53.8817 66.824 55.2884 68.3617 55.2884C71.7157 55.2884 81.7912 51.9311 81.7912 48.5737C81.7912 45.2163 78.4338 41.859 78.4338 41.859L85.1486 38.5016C88.5059 35.1442 85.1486 15 71.7191 15C48.2175 15 39.5891 38.5016 39.5891 38.5016L39.6126 38.5385H39.5891C39.5891 38.5385 19.4448 75.4327 19.4448 105.686C19.6631 105.686 16.0875 122.473 19.4448 125.83C22.8022 129.188 36.2317 129.188 36.2317 129.188C69.8054 142.58 132.152 132.508 132.152 102.292C132.152 58.6458 66.448 68.7179 56.3759 88.8621Z"
                      fill="url(#paint0_linear_340_610)"
                    ></path>
                    <path
                      d="M80.0942 124.146C69.4244 124.146 60.6449 119.839 60.148 119.591C59.3511 119.193 58.7447 118.495 58.4623 117.65C58.18 116.806 58.2447 115.884 58.6422 115.087C59.0398 114.29 59.7377 113.683 60.5823 113.401C61.427 113.119 62.3492 113.183 63.1462 113.581C63.2872 113.648 77.3814 120.497 89.8574 115.73C96.7568 113.094 102.028 107.313 105.533 98.5533C105.697 98.1437 105.939 97.7703 106.247 97.4545C106.555 97.1387 106.922 96.8866 107.327 96.7126C107.733 96.5387 108.168 96.4462 108.609 96.4406C109.05 96.435 109.488 96.5163 109.898 96.6798C110.307 96.8434 110.68 97.0861 110.996 97.3939C111.312 97.7018 111.564 98.0688 111.738 98.4741C111.912 98.8794 112.005 99.315 112.01 99.756C112.016 100.197 111.935 100.635 111.771 101.044C107.531 111.637 100.95 118.697 92.2042 122.021C88.1283 123.572 83.982 124.146 80.0942 124.146Z"
                      fill="#1a1a1a"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_340_610"
                        x1="18"
                        y1="135"
                        x2="133.479"
                        y2="22.7708"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white"></stop>
                        <stop offset="1" stop-color="#D6D6D6"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="hero_cubes_side is-back"></div>
            </div>
          </div>
        </div>
        {/* Hero Text Animated */}
        <div className="hero-section-text">
          <h1>
            <span>
              <span className="char">W</span>
              <span className="char">E</span>{" "}
            </span>
            <span>
              <span className="char">C</span><span className="char">O</span>
              <span className="char">O</span><span className="char">K</span>
            </span>
            <span>
              <span className="char">P</span><span className="char">O</span>
              <span className="char">W</span><span className="char">E</span>
              <span className="char">R</span><span className="char">F</span>
              <span className="char">U</span><span className="char">L</span>{" "}
            </span>
            <span>
              <span className="char">W</span><span className="char">E</span>
              <span className="char">B</span><span className="char">S</span>
              <span className="char">I</span><span className="char">T</span>
              <span className="char">E</span><span className="char">S</span>
            </span>
            <span>
              <span className="char">W</span><span className="char">I</span>
              <span className="char">T</span><span className="char">H</span>
            </span>
            <span className="margin-left amy">
              <span className="char">A.</span>
              <span className="char">M.</span>
              <span className="char">Y</span>
            </span>
          </h1>
          <p>
            <span>
              <span className="chars">E</span><span className="chars">m</span>
              <span className="chars">p</span><span className="chars">o</span>
              <span className="chars">w</span><span className="chars">e</span>
              <span className="chars">r</span><span className="chars">i</span>
              <span className="chars">n</span><span className="chars">g</span>
            </span>
            <span>
              <span className="chars">b</span><span className="chars">u</span>
              <span className="chars">s</span><span className="chars">i</span>
              <span className="chars">n</span><span className="chars">e</span>
              <span className="chars">s</span><span className="chars">s</span>
              <span className="chars">e</span><span className="chars">s,</span>
            </span>
            <span>
              <span className="chars">b</span><span className="chars">r</span>
              <span className="chars">a</span><span className="chars">n</span>
              <span className="chars">d</span><span className="chars">s</span>
            </span>
            <span>
              <span className="chars">a</span><span className="chars">n</span>
              <span className="chars">d</span>
            </span>
            <span>
              <span className="chars">s</span><span className="chars">t</span>
              <span className="chars">a</span><span className="chars">r</span>
              <span className="chars">t</span><span className="chars">u</span>
              <span className="chars">p</span><span className="chars">s</span>
            </span>
            <span>
              <span className="chars">w</span><span className="chars">i</span>
              <span className="chars">t</span><span className="chars">h</span>
            </span>
            <span>
              <span className="chars">t</span><span className="chars">h</span>
              <span className="chars">e</span>
            </span>
            <span>
              <span className="chars">p</span><span className="chars">o</span>
              <span className="chars">w</span><span className="chars">e</span>
              <span className="chars">r</span>
            </span>
            <span>
              <span className="chars">o</span><span className="chars">f</span>
            </span>
            <span>
              <span className="chars">A</span><span className="chars">M</span>
              <span className="chars">Y</span>
            </span>
            <span>
              <span className="chars">t</span><span className="chars">o</span>
            </span>
            <span>
              <span className="chars">e</span><span className="chars">l</span>
              <span className="chars">e</span><span className="chars">v</span>
              <span className="chars">a</span><span className="chars">t</span>
              <span className="chars">e</span>
            </span>
            <span>
              <span className="chars">a</span><span className="chars">n</span>
              <span className="chars">d</span>
            </span>
            <span>
              <span className="chars">s</span><span className="chars">p</span>
              <span className="chars">i</span><span className="chars">c</span>
              <span className="chars">e</span>
            </span>
            <span>
              <span className="chars">U</span><span className="chars">P</span>
            </span>
            <span>
              <span className="chars">t</span><span className="chars">h</span>
              <span className="chars">e</span><span className="chars">i</span>
              <span className="chars">r</span>
            </span>
            <span>
              <span className="chars">o</span><span className="chars">n</span>
              <span className="chars">l</span><span className="chars">i</span>
              <span className="chars">n</span><span className="chars">e</span>
            </span>
            <span>
              <span className="chars">p</span><span className="chars">r</span>
              <span className="chars">e</span><span className="chars">s</span>
              <span className="chars">e</span><span className="chars">n</span>
              <span className="chars">c</span><span className="chars">e</span>
            </span>
          </p>
          <div className="hero-section-text-links">
            <a
              href="https://www.linkedin.com/in/moataz-a-m-y-41a60127a/"
              className="button-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="button">Let's cook a website</div>
              <div className="button_bg-grad"></div>
            </a>
            <a href="#work" className="explore-projects">
              Explore Projects <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;