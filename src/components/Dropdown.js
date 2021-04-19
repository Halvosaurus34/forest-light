import React from "react";

function Dropdown(props) {
  const options = [
    {
      option1: "About Me",
      option2: "Testimonials",
      option3: "FAQ",
    },
    {
      option1: "Packages",
      option2: "Boudoir",
      option3: "Stranger Sessions",
    },
  ];

  const pickOption = props.option === "about" ? options[0] : options[1];
  return (
    <ul className="dropdown">
      <li>
        <a className="dropdown-item" href="/">
          {pickOption.option1}
        </a>
      </li>
      <li className="dropdown-item">
        <a href="/">{pickOption.option2}</a>
      </li>
      <li className="dropdown-item">
        <a href="/">{pickOption.option3}</a>
      </li>
    </ul>
  );
}

export default Dropdown;
