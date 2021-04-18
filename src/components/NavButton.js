import React from "react";

function NavButton(props) {
  return (
    <li>
      <a href="/" className="nav-button">
        {props.name}
      </a>
    </li>
  );
}

export default NavButton;
