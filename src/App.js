import React from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import "../src/dist/styles.css";
import Details from "./components/Details";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content-container">
        <Gallery />
        <Details />
      </div>
    </div>
  );
}

export default App;
