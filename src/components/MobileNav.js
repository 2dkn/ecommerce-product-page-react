import React, { useState } from "react";
import menu from "../images/icon-menu.svg";
import { ReactComponent as CloseBtn } from "../images/icon-close.svg";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="hamburger" onClick={toggleMenu}>
        <img src={menu} />
      </button>
      <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
        <button
          className="close-btn"
          onClick={toggleMenu}
          aria-label="Close overlay"
        >
          <CloseBtn
            fill="hsl(219, 9%, 45%)"
            style={{ width: 23, height: 23 }}
          />
        </button>
        <div className="menu-items">
          <a href="#" className="menu-link">
            Collection
          </a>
          <a href="#" className="menu-link">
            Men
          </a>
          <a href="#" className="menu-link">
            Women
          </a>
          <a href="#" className="menu-link">
            About
          </a>
          <a href="#" className="menu-link">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
