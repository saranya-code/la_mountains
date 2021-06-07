import React from "react";
import logo from "../images/logo.png";

function Header() {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <a href="home.html">
        <img src={logo} alt="headerImage" />
      </a>
      <div>
        <a href="/history">01. HISTORY</a>
        <a href="/teams/Mountain1">02. TEAM</a>
      </div>
    </header>
  );
}
export default Header;
