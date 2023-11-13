import React from "react";
import "./Header.scss";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="logo-header">
        <img className="logo" src={logo} alt="svg logo" width={80} />
        <h1>Cognito Store</h1>
      </div>
      <nav>
        <ul>
          <li>
            {/* target blank to make links opoen in another tab */}
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
        </ul>
      </nav>
      <hr className="solid"></hr>
    </header>
  );
}

export default Header;
