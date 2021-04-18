import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
function SocialIcons(props) {
  const icon =
    props.iconName === "facebook" ? <FaFacebookSquare /> : <FaInstagram />;
  return (
    <li>
      <a href={props.link} className="nav-button">
        {icon}
      </a>
    </li>
  );
}

export default SocialIcons;
