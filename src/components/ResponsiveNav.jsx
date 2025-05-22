import React, { useEffect } from "react";

function ResponsiveNav() {
  useEffect(() => {
    const menu = document.querySelector(".btn");
    const navlist = document.querySelector(".responsive-navlist");
    const navlistlinks = document.querySelectorAll(".list-none li");

    const toggle = () => {
      navlist.classList.toggle("listshow");
      menu.classList.toggle("btnactive");
    };
    // Attach
    if (menu) menu.addEventListener("click", toggle);
    navlistlinks.forEach(link =>
      link.addEventListener("click", () => navlist.classList.remove("listshow"))
    );
    return () => {
      if (menu) menu.removeEventListener("click", toggle);
      navlistlinks.forEach(link =>
        link.removeEventListener("click", () => navlist.classList.remove("listshow"))
      );
    };
  }, []);

  return (
    <div className="responsive-navlist">
      <ul className="list-none">
        <li><a href="#home">Home</a></li>
        <li><a href="#aboutme">About me</a></li>
        <li><a href="#work">Projects</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>
    </div>
  );
}
export default ResponsiveNav;