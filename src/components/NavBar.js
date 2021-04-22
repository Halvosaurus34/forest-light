import React from "react";
import NavButton from "./NavButton";
import SocialIcons from "./SocialIcons";
import Dropdown from "./Dropdown";
import { useState } from "react";
import "./NavBar.css";
function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const socials = [
    {
      name: "facebook",
      link: "https://www.facebook.com/forestlightphotography/",
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/forestlightphotography/",
    },
  ];

  const changeBackground = () => {
    if (window.scrollY > window.screen.height * 0.65) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={navbar ? "navbar active" : "navbar"}>
      <div className="title-buttons-container">
        <div className="title-container">
          <a href="/" className="title">
            Forest & Light Photography
          </a>
        </div>
        <input type="checkbox" className="nav-toggle" id="nav-toggle" />
        <nav className="button-container">
          <ul>
            <NavButton name="About" />
            <NavButton name="Portfolio" />
            <NavButton name="Investments" />
            <NavButton name="Contact" />
            <div>
              <ul className="social-list">
                {socials.map((item) => {
                  return <SocialIcons iconName={item.name} link={item.link} />;
                })}
              </ul>
            </div>
          </ul>
        </nav>
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <span></span>
        </label>
      </div>
    </div>
  );
}

export default NavBar;
