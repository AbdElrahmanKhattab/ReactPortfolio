import React, { useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import ResponsiveNav from "./components/ResponsiveNav";
import Frames from "./components/Frames";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Example: wait for all data to load
    async function loadEverything() {
      // await your data fetching here, e.g.:
      // await fetchData1();
      // await fetchData2();
      // await loadImages(); // if you want to preload images

      // Simulate loading for demonstration purposes
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsLoading(false);
    }

    loadEverything();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Scroll-triggered animations and section effects
  useEffect(() => {
  function onLoad() {
    // JS logic here (e.g. add event listeners, DOM changes, etc.)
    function scrollHandler() {
      const scrollPosition = window.scrollY;
      // Projects section animation
      [
        { selector: '.norm1', left: 'animd', right: 'animt' },
        { selector: '.norm2', left: 'animd', right: 'animt' },
        { selector: '.reverse', left: 'animt', right: 'animd' }
      ].forEach(({ selector, left, right }) => {
        const element = document.querySelector(selector);
        if (!element) return;
        const triggerPosition = element.offsetTop - 800;
        const elementHeight = element.offsetHeight;
        if (scrollPosition >= triggerPosition && scrollPosition < triggerPosition + elementHeight) {
          const leftElement = element.querySelector('.leftwork');
          const rightElement = element.querySelector('.rightwork');
          if (leftElement) leftElement.classList.add(left);
          if (rightElement) rightElement.classList.add(right);
        }
      });

      // Nav background color
      const nav = document.querySelector(".nav");
      if (nav) {
        if (scrollPosition >= 165) {
          nav.style.background = "#050a0f";
        } else {
          nav.style.background = "#0a141f";
        }
      }

      // About Me header animation
      const aboutme = document.querySelector(".aboutme");
      const elementst = document.querySelectorAll(".chara");
      if (aboutme) {
        const top = aboutme.offsetTop;
        const height = aboutme.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          elementst.forEach((element, index) => {
            setTimeout(() => {
              element.classList.add("animation");
            }, 100 + index * 40);
          });
        }
      }
      // About Me header animation
      const home = document.querySelector("#home");
      const homeelementst = document.querySelectorAll(".char");
      if (home) {
        const top = home.offsetTop;
        const height = home.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          homeelementst.forEach((element, index) => {
            setTimeout(() => {
              element.classList.add("animation");
            }, 100 + index * 40);
          });
        }
      }

      // Perks animation
      const perksitem = document.querySelectorAll(".perks_item");
      if (perksitem) {
        perksitem.forEach(e => {
          const topa = e.offsetTop + 2000;
          const heighta = e.offsetHeight + 100;
          if (scrollPosition >= topa && scrollPosition < topa + heighta) {
            e.classList.add('perks-animation');
          }
        });
      }
    }
    window.addEventListener('scroll', scrollHandler, { passive: true });
    // Initial call for immediate effect
    scrollHandler();
    return () => window.removeEventListener('scroll', scrollHandler);
  }
  window.addEventListener('load', onLoad);
  return () => window.removeEventListener('load', onLoad);
}, []);

  return (
    <>
      <LoadingScreen />
      <ResponsiveNav />
      <Frames />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
