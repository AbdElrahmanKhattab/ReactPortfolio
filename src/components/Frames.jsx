import React, { useEffect } from "react";

function Frames() {
  useEffect(() => {
    const frameapp = document.querySelector(".app");
    const framestore = document.querySelector(".store");
    const framedesign = document.querySelector(".design");
    const appweb = document.querySelector(".appimg");
    const storeweb = document.querySelector(".storeimg");
    const designweb = document.querySelector(".desigimg");
    const frameclose = document.querySelectorAll(".frameclose");

    const showFrame = (frame) => {
      if (frame) frame.style.display = "block";
    };
    const hideFrames = () => {
      [frameapp, framestore, framedesign].forEach(fr => {
        if (fr) fr.style.display = "none";
      });
    };

    appweb && appweb.addEventListener("click", () => showFrame(frameapp));
    storeweb && storeweb.addEventListener("click", () => showFrame(framestore));
    designweb && designweb.addEventListener("click", () => showFrame(framedesign));
    frameclose.forEach(btn => btn.addEventListener("click", hideFrames));
    return () => {
      appweb && appweb.removeEventListener("click", () => showFrame(frameapp));
      storeweb && storeweb.removeEventListener("click", () => showFrame(framestore));
      designweb && designweb.removeEventListener("click", () => showFrame(framedesign));
      frameclose.forEach(btn => btn.removeEventListener("click", hideFrames));
    };
  }, []);

  return (
    <>
      <div className="frame app">
        <p className="frameclose">x</p>
        <iframe
          src="https://abdelrahmankhattab.github.io/app/"
          frameBorder="0"
          title="App Frame"
        ></iframe>
      </div>
      <div className="frame store">
        <p className="frameclose">x</p>
        <iframe
          src="https://abdelrahmankhattab.github.io/store/"
          frameBorder="0"
          title="Store Frame"
        ></iframe>
      </div>
      <div className="frame design">
        <p className="frameclose">x</p>
        <iframe
          src="https://al-horria.com/home"
          frameBorder="0"
          title="Design Frame"
        ></iframe>
      </div>
    </>
  );
}
export default Frames;