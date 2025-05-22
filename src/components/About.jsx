import React, { useEffect,useRef } from "react";

function About() {
  const perksListRef = useRef(null);

  // Mouse glow effect:
  useEffect(() => {
    const handler = (e) => {
      const cards = document.getElementsByClassName("perks_item");
      for (const card of cards) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
    const current = perksListRef.current;
    if (current) current.addEventListener("mousemove", handler);
    return () => {
      if (current) current.removeEventListener("mousemove", handler);
    };
  }, []);
  // Skills mousemove effect
  useEffect(() => {
    const skillsection = document.querySelector(".aboutme-header");
    const skill = document.querySelector(".aboutme-skills");
    let isMouseHover = false;
    let xvalue = 0, yvalue = 0;

    const onMouseMove = (e) => {
      xvalue = e.clientX - window.innerWidth / 2;
      yvalue = e.clientY - window.innerHeight / 2;
      if (isMouseHover && skill) {
        const yskill = yvalue / 20;
        const xskill = 4 + xvalue / 50;
        skill.style.transform = `translate3d(${-xskill}%, ${-yskill}%, 0px)`;
      } else if (!isMouseHover && skill) {
        skill.style.transform = `translate3d(4%, 0%, 0px)`;
      }
    };
    skillsection?.addEventListener("mouseover", () => { isMouseHover = true; });
    skillsection?.addEventListener("mouseleave", () => { isMouseHover = false; });
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      skillsection?.removeEventListener("mouseover", () => { isMouseHover = true; });
      skillsection?.removeEventListener("mouseleave", () => { isMouseHover = false; });
    };
  }, []);

  return (
    <div className="aboutme" id="aboutme">
      <div className="aboutme-heading">
        <h1>About me</h1>
      </div>
      <div className="aboutme-header">
        <div className="aboutme-text">
          <h2>
            <span>
              <span className="chara">I</span>
              <span className="chara">n</span>
              <span className="chara">t</span>
              <span className="chara">e</span>
              <span className="chara">g</span>
              <span className="chara">r</span>
              <span className="chara">a</span>
              <span className="chara">t</span>
              <span className="chara">e</span>
            </span>
            <span>
              <span className="chara">y</span>
              <span className="chara">o</span>
              <span className="chara">u</span>
              <span className="chara">r</span>
            </span>
            <span>
              <span className="chara">w</span>
              <span className="chara">e</span>
              <span className="chara">b</span>
              <span className="chara">s</span>
              <span className="chara">i</span>
              <span className="chara">t</span>
              <span className="chara">e</span>
            </span>
            <span>
              <span className="chara">w</span>
              <span className="chara">i</span>
              <span className="chara">t</span>
              <span className="chara">h</span>
            </span>
            <span>
              <span className="chara">p</span>
              <span className="chara">o</span>
              <span className="chara">w</span>
              <span className="chara">e</span>
              <span className="chara">r</span>
              <span className="chara">f</span>
              <span className="chara">u</span>
              <span className="chara">l</span>
            </span>
            <span>
              <span className="chara">t</span>
              <span className="chara">o</span>
              <span className="chara">o</span>
              <span className="chara">l</span>
              <span className="chara">s</span>
            </span>
          </h2>
        </div>
        <div className="aboutme-skills">
          <div className="skills-list-line">
            <div className="skills-item">
              <img src="media/css-3.png" alt="" />
            </div>
            <div className="skill-dot"></div>
            <div className="skills-item">
              <img src="media/esc.png" alt="" />
            </div>
            <div className="skill-dot"></div>
            <div className="skills-item">
              <img src="media/ai.png" alt="" />
            </div>
            <div className="skill-dot"></div>
            <div className="skills-item">
              <img src="media/js.png" alt="" />
            </div>
            <div className="skill-dot"></div>
            <div className="skills-item">
              <img src="media/bootstrap.png" alt="" />
            </div>
            <div className="skill-dot"></div>
            <div className="skills-item">
              <img src="media/github-sign.png" alt="" />
            </div>
            <div className="skill-dot"></div>
            <div className="skills-item">
              <img src="media/HTML.png" alt="" />
            </div>
            <div className="skill-dot"></div>
          </div>
          <div className="skills-list-line">
            <div className="skill-dot"></div>
            <div className="skills-item skll">
              <img src="media/pay.png" alt="" />
            </div>
            <div className="skill-dot"></div>
            <div className="skills-item">
              <img src="media/shopify.png" alt="" />
            </div>
            <div className="skill-dot"></div>
            <div className="skills-item">
              <img src="media/react.png" alt="" />
            </div>
            <div className="skill-dot"></div>
            <div className="skills-item">
              <img src="media/css-3.png" alt="" />
            </div>
            <div className="skill-dot"></div>
            <div className="skills-item">
              <img src="media/figma.png" alt="" />
            </div>
            <div className="skill-dot"></div>
            <div className="skills-item">
              <img src="media/vsc.jpg" alt="" />
            </div>
            <div className="skill-dot"></div>
            <div className="skills-item">
              <img src="media/tailpng.png" alt="" />
            </div>
          </div>
          <div className="skills-list-line">
            <div className="skills-item">
              <img src="media/js.png" alt="" />
            </div>
            <div className="skill-dot"></div>
            <div className="skills-item">
              <img src="media/npm.png" alt="" />
            </div>
            <div className="skill-dot"></div>
            <div className="skills-item">
              <img src="media/HTML.png" alt="" />
            </div>
            <div className="skill-dot"></div>
            <div className="skills-item">
              <img src="media/tailpng.png" alt="" />
            </div>
            <div className="skill-dot"></div>
            <div className="skills-item">
              <img src="media/chat.jpg" alt="" />
            </div>
            <div className="skill-dot"></div>
            <div className="skills-item">
              <img src="media/illustrator.png" alt="" />
            </div>
            <div className="skill-dot"></div>
            <div className="skills-item">
              <img src="media/bootstrap.png" alt="" />
            </div>
            <div className="skill-dot"></div>
          </div>
        </div>
      </div>
      <div className="aboutme-heading">
        <h1>services</h1>
      </div>
      <div className="perks_wrapper">
        <div id="servies" className="perks_list" ref={perksListRef}>
          {/* Service cards as in your HTML */}
          <div className="perks_item">
            <div className="perks-icon_wrapper">
              <img
                src="media/64558cfd1b66b2ab60e6cfc3_Muscle (1).svg"
                loading="lazy"
                width="80"
                height="80"
                alt="Muscle Icon"
                className="perks_icon"
              />
            </div>
            <h3 className="heading-style-h4">Client-First System</h3>
            <p>
              All our websites follow industry-leading Client-first system by
              Finsweet.
            </p>
          </div>
          <div className="perks_item">
            <div className="perks-icon_wrapper">
              <img
                src="media/63ee78a84384ec4ca43b2634_Responsive (6).svg"
                loading="lazy"
                width="80"
                height="80"
                alt="Responsive Icon"
                className="perks_icon"
              />
            </div>
            <h3 className="heading-style-h4">Fully Responsive</h3>
            <p>
              All our websites are made fully responsive for different devices
              and screens.
            </p>
          </div>
          <div className="perks_item">
            <div className="perks-icon_wrapper">
              <img
                src="media/63ee51cdfcb0c0ff2e953331_Scalable.svg"
                loading="lazy"
                width="80"
                height="80"
                alt="Scalable Icon"
                className="perks_icon"
              />
            </div>
            <h3 className="heading-style-h4">Flexible and Scalable</h3>
            <p>
              We follow organised HTML structure inside the Code to make website
              scalable.
            </p>
          </div>
          <div className="perks_item">
            <div className="perks-icon_wrapper">
              <img
                src="media/63ee51cde240699daca34c02_Interactions.svg"
                loading="lazy"
                width="80"
                height="80"
                alt="Interactions Icon"
                className="perks_icon"
              />
            </div>
            <h3 className="heading-style-h4">Faster Turnarounds</h3>
            <p>
              We follow efficient development techniques to ensure faster
              turnarounds, without sacrificing the quality.
            </p>
          </div>
          <div className="perks_item">
            <div className="perks-icon_wrapper">
              <img
                src="media/645542aef64eda193320b9fe_Interactions (2).svg"
                loading="lazy"
                width="80"
                height="80"
                alt="Custom Code Icon"
                className="perks_icon"
              />
            </div>
            <h3 className="heading-style-h4">Advance Interactions</h3>
            <p>
              Our team can create simplest to complex interactions inside the
              website using both native and custom JS libraries.
            </p>
          </div>
          <div className="perks_item">
            <div className="perks-icon_wrapper">
              <img
                src="media/6455438dcd6e382e76049b14_Perfomance.svg"
                loading="lazy"
                width="80"
                height="80"
                alt="Performance Icon"
                className="perks_icon"
              />
            </div>
            <h3 className="heading-style-h4">High Performance</h3>
            <p>
              We optimize all our websites for maximum performance and faster
              loading times.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;