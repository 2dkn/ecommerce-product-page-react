import React, { useState, useEffect } from "react";
import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import { ReactComponent as Cart } from "../images/icon-cart.svg";
import { ReactComponent as Trash } from "../images/icon-delete.svg";
import sneaker from "../images/image-product-1-thumbnail.jpg";

function Header({ cartCount, onCountReset }) {
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);
  const [count, setCount] = useState(cartCount);
  const [isEmpty, setIsEmpty] = useState(cartCount === 0);

  const itemPrice = 125.0; // Assuming the item price is $125.00

  const getTotalPrice = () => {
    return (itemPrice * cartCount).toFixed(2); // Keep it formatted with two decimal places
  };

  useEffect(() => {
    setCount(cartCount);
    setIsEmpty(cartCount === 0);
  }, [cartCount]);

  const toggleCheckout = () => {
    setCheckoutOpen(!isCheckoutOpen);
  };

  const handleCountReset = () => {
    // setIsEmpty(true);
    setCount(0);
    onCountReset();
  };

  useEffect(() => {
    if (isCheckoutOpen) {
      const handleOutsideClick = (e) => {
        // Check if the clicked element is outside the cart and checkout
        if (
          !document.querySelector(".cart").contains(e.target) &&
          !document.querySelector(".checkout").contains(e.target)
        ) {
          setCheckoutOpen(false);
        }
      };

      // Add event listener when component mounts
      document.addEventListener("click", handleOutsideClick);

      // Remove event listener when component unmounts
      return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
    }
  }, [isCheckoutOpen]);

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
          {isEmpty ? "" : <span className="cart-quantity">{cartCount}</span>}
        </button>
        {isCheckoutOpen && (
          <div className="checkout">
            <div>
              <h1>Cart</h1>
            </div>
            {isEmpty ? (
              <p className="cart-empty">Your cart is empty</p>
            ) : (
              <>
                <div className="price-count">
                  <img
                    className="sneaker-cart"
                    src={sneaker}
                    alt="sneaker"
                  ></img>
                  <div>
                    <p>Fall Limited Edition Sneakers</p>
                    <p>
                      ${itemPrice.toFixed(2)} x {cartCount}{" "}
                      <b>${getTotalPrice()}</b>
                    </p>
                  </div>
                  <button
                    className="trash"
                    onClick={() => {
                      handleCountReset();
                    }}
                  >
                    <Trash fill="#C3CAD9" />
                  </button>
                </div>
                <div>
                  <button className="checkout-btn">Checkout</button>
                </div>
              </>
            )}
          </div>
        )}
        <img className="avatar" src={avatar} alt="Man glasses" />
      </div>
    </header>
  );
}

export default Header;
