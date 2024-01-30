import React, { useState } from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import "../src/dist/styles.css";
import Details from "./components/Details";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (quantity) => {
    setCartCount((prevCount) => prevCount + quantity);
  };

  const handleCartCountReset = () => {
    setCartCount(0);
  };

  return (
    <div className="container">
      <Header cartCount={cartCount} onCountReset={handleCartCountReset} />
      <div className="content-container">
        <Gallery />
        <Details onAddToCart={handleAddToCart} />
      </div>
    </div>
  );
}

export default App;
