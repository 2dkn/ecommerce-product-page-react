import React, { useState } from "react";
import { image1, image2, image3, image4 } from "../images";
import { thumbnail1, thumbnail2, thumbnail3, thumbnail4 } from "../images";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(image1);
  const [selectedThumbnail, setSelectedThumbnail] = useState(thumbnail1);

  const handleThumbnailClick = (newImage, newThumbnail) => {
    setSelectedImage(newImage);
    setSelectedThumbnail(newThumbnail);
  };

  return (
    <div className="image-container">
      <div className="big-images">
        <img className="big-sneaker" src={selectedImage} alt="big sneaker" />
      </div>
      <div className="small-images">
        <img
          className={`small-sneaker ${
            selectedThumbnail === thumbnail1 ? "selected" : ""
          }`}
          src={thumbnail1}
          alt="small sneaker"
          onClick={() => handleThumbnailClick(image1, thumbnail1)}
        />
        <img
          className={`small-sneaker ${
            selectedThumbnail === thumbnail2 ? "selected" : ""
          }`}
          src={thumbnail2}
          alt="small sneaker"
          onClick={() => handleThumbnailClick(image2, thumbnail2)}
        />
        <img
          className={`small-sneaker ${
            selectedThumbnail === thumbnail3 ? "selected" : ""
          }`}
          src={thumbnail3}
          alt="small sneaker"
          onClick={() => handleThumbnailClick(image3, thumbnail3)}
        />
        <img
          className={`small-sneaker ${
            selectedThumbnail === thumbnail4 ? "selected" : ""
          }`}
          src={thumbnail4}
          alt="small sneaker"
          onClick={() => handleThumbnailClick(image4, thumbnail4)}
        />
      </div>
    </div>
  );
}

export default Gallery;
