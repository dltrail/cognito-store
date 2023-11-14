import React from "react";
import "./Header.scss";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";
import Button from "../UI/Button/Button";

function Header({ handleOpencart, cartTotal }) {
  return (
    <header className="header">
      <div className="logo-header">
        <img className="logo" src={logo} alt="svg logo" width={80} />
        <h1>Cognito Store</h1>
        <p>The store that’s not actually a store</p>
        <Button buttonClass="cartButton" onButtonClick={handleOpencart}>
          <img src={cart} alt="cart icon" />
          <span>{cartTotal}</span>
        </Button>
      </div>

      {/* TODO: Component this into navigation and nav links. Pass link values (array) as prop to nagigation component */}
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
