import React from "react";
import "./Header.scss";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";

function Header({ cartButton, cartTotal }) {
  return (
    <header className="header">
      <div className="logo-header">
        <img className="logo" src={logo} alt="svg logo" width={80} />
        <h1>Cognito Store</h1>
        <p>The store that’s not actually a store</p>
        <button className="cartButton" onClick={cartButton}>
          <img src={cart} alt="cart icon" />
          <span>{cartTotal}</span>
        </button>
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
      <div className="solid-hr"></div>
    </header>
  );
}

export default Header;
