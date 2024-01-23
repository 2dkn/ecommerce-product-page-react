import React from "react";

import { image1, image2, image3, image4 } from "../images";
import { thumbnail1, thumbnail2, thumbnail3, thumbnail4 } from "../images";

function Gallery() {
  return (
    <div className="image-container">
      <div className="big-images">
        <img className="big-sneaker" src={image1} alt="big sneaker" />
      </div>
      <div className="small-images">
        <img className="small-sneaker" src={thumbnail1} alt="small sneaker" />
        <img className="small-sneaker" src={thumbnail2} alt="small sneaker" />
        <img className="small-sneaker" src={thumbnail3} alt="small sneaker" />
        <img className="small-sneaker" src={thumbnail4} alt="small sneaker" />
      </div>
    </div>
  );
}

export default Gallery;
