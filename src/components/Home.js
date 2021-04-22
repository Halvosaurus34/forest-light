import React from "react";
import homeBackground from "../assets/DSC_0304-2.jpg";
import coupleBabyBack from "../assets/couple-baby-back.jpg";
import coupleBabyKiss from "../assets/couple-baby-kiss.jpg";
import kidsMom from "../assets/kids-mom.jpg";
import pregnantSunset from "../assets/pregnant-sunset.jpg";
import vanessaFin from "../assets/vanessa-fin.jpg";
import NavButton from "./NavButton";
import SocialIcons from "./SocialIcons";
import "./Home.css";
import { Parallax } from "react-scroll-parallax";
function Home() {
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

  return (
    <div>
      <main>
        <img
          src={homeBackground}
          alt="mountains"
          className="background-image"
        />
        <h1>
          <span>Welcome </span>
          <span>to </span>
          <span>Forest </span>
          <span>& </span>
          <span>light </span>
          <span>Photography </span>
        </h1>
      </main>
      <div className="insta-container">
        <Parallax className="insta-image" x={[80, -30]} tagOuter="figure">
          <img src={coupleBabyKiss} alt="mountains" className="insta-image" />
        </Parallax>
        <Parallax className="insta-image" x={[-50, 100]} tagOuter="figure">
          <img src={kidsMom} alt="mountains" className="insta-image" />
        </Parallax>
      </div>
      <footer>
        <ul>
          {socials.map((item) => {
            return <SocialIcons iconName={item.name} link={item.link} />;
          })}
        </ul>
        <p>All content Copyright &copy; 2021 Forest & Light Photography</p>
      </footer>
    </div>
  );
}

export default Home;
