import React from "react";
import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import { ReactComponent as Cart } from "../images/icon-cart.svg";

function Header() {
  return (
    <header className="header-container">
      <div className="header-left">
        <img className="logo" src={logo} alt="sneakers" />
        <a href="#" className="links">
          Collection
        </a>
        <a href="#" className="links">
          Men
        </a>
        <a href="#" className="links">
          Women
        </a>
        <a href="#" className="links">
          About
        </a>
        <a href="#" className="links">
          Contact
        </a>
      </div>
      <div className="header-right">
        <button className="cart">
          <Cart fill="#69707D" />
        </button>
        <img className="avatar" src={avatar} alt="Man glasses" />
      </div>
    </header>
  );
}

export default Header;
