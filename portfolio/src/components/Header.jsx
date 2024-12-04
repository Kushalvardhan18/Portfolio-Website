import React from "react";
import sign from "../assets/sign.png";
function Header() {
  return (
    <div className="flex flex-row justify-between">
      <div className="left m-4">
        <img src={sign} alt="logo" />
      </div>
      <div className="right m-20">
        <nav>
          <ol>
            <li>Home</li>
            <li>ContactMe</li>
            <li>About</li>
            <li>HireME!!</li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default Header;
