import React from "react";
import Dropdown from "./Dropdown";
function NavButton(props) {
  const className =
    props.name === "About" || "Investments"
      ? "nav-button dropdown-start"
      : "nav-button";
  return (
    <li
      className={
        props.name === "About" || props.name === "Investments"
          ? "dropdown-start"
          : ""
      }
    >
      <a href="/">{props.name}</a>
      {props.name === "About" ? <Dropdown option="about" /> : ""}
      {props.name === "Investments" ? <Dropdown option="investments" /> : ""}
    </li>
  );
}

export default NavButton;
