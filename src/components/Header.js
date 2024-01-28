import React, { useState } from "react";
import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import { ReactComponent as Cart } from "../images/icon-cart.svg";
import { ReactComponent as Trash } from "../images/icon-delete.svg";
import sneaker from "../images/image-product-1-thumbnail.jpg";

function Header() {
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);

  const toggleCheckout = () => {
    setCheckoutOpen(!isCheckoutOpen);
  };

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
        <button className="cart" onClick={toggleCheckout}>
          <Cart fill="#69707D" />
        </button>
        {isCheckoutOpen && (
          <div className="checkout">
            <div>
              <h1>Cart</h1>
            </div>
            <div className="price-count">
              <img className="sneaker-cart" src={sneaker}></img>
              <p>Fall Limited Edition Sneakers</p>
              <p>$125.00 x 1</p>
              <p>Total Price</p>
              <button className="trash">
                <Trash />
              </button>
            </div>
            <div>
              <button className="checkout-btn">Checkout</button>
            </div>
          </div>
        )}
        <img className="avatar" src={avatar} alt="Man glasses" />
      </div>
    </header>
  );
}

export default Header;
