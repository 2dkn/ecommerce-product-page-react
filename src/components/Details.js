import React from "react";
import { minus, plus, cart2 } from "../images";
import { ReactComponent as Minus } from "../images/icon-minus.svg";
import { ReactComponent as Plus } from "../images/icon-plus.svg";

function Details() {
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
        <button className="minusplus-btn">
          <Minus fill="#FF7E1B" />
        </button>
        <p className="count">0</p>
        <button className="plusminus-btn">
          <Plus fill="#FF7E1B" />
        </button>
        <button className="cart-btn">
          <img className="cart2" src={cart2} alt="cart button" />
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Details;

{
  /* <img className="minus" src={minus} alt="minus sign" /> */
}
