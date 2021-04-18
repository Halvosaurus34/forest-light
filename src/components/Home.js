import React from "react";
import homeBackground from "../assets/DSC_0304-2.jpg";
import "./Home.css";
function Home() {
  return (
    <main>
      <img src={homeBackground} alt="mountains" className="background-image" />
    </main>
  );
}

export default Home;
