import React, { useState } from "react";
import { cart2 } from "../images";
import { ReactComponent as Minus } from "../images/icon-minus.svg";
import { ReactComponent as Plus } from "../images/icon-plus.svg";

function Details({ onAddToCart }) {
  const [count, setCount] = useState(0);

  const handleCountUp = () => {
    setCount(count + 1);
  };

  const handleCountDown = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    onAddToCart(count);
  };

  return (
    <div className="details">
      <h1>SNEAKER COMPANY</h1>
      <h3>Fall Limited Edition Sneakers</h3>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="prices">
        <p>$125.00</p>
        <p>50%</p>
        <p>$250.00</p>
      </div>
      <div className="buttons">
        <div className="counter-btn">
          <button className="minusplus-btn" onClick={handleCountDown}>
            <Minus fill="#FF7E1B" />
          </button>
          <p className="count">{count}</p>
          <button className="plusminus-btn" onClick={handleCountUp}>
            <Plus fill="#FF7E1B" />
          </button>
        </div>
        <button
          className="cart-btn"
          onClick={() => {
            handleAddToCart();
            setCount(0);
          }}
        >
          <img className="cart2" src={cart2} alt="cart button" />
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Details;
