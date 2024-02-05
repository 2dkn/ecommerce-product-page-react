import React, { useState } from "react";
import { image1, image2, image3, image4 } from "../images";
import { thumbnail1, thumbnail2, thumbnail3, thumbnail4 } from "../images";
import Overlay from "../components/Overlay";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(image1);
  const [selectedThumbnail, setSelectedThumbnail] = useState(thumbnail1);
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const handleThumbnailClick = (newImage, newThumbnail) => {
    setSelectedImage(newImage);
    setSelectedThumbnail(newThumbnail);
  };

  const handleBigSneakerClick = () => {
    setOverlayVisible(true);
  };

  const handleOverlayClose = () => {
    setOverlayVisible(false);
  };

  return (
    <div className="image-container">
      <div className="big-images" onClick={handleBigSneakerClick}>
        <img className="big-sneaker" src={selectedImage} alt="big sneaker" />
      </div>
      <div className="small-images">
        <div
          className={`border-outline ${
            selectedThumbnail === thumbnail1 ? "outlined" : ""
          }`}
        >
          <img
            className={`small-sneaker ${
              selectedThumbnail === thumbnail1 ? "selected" : ""
            }`}
            src={thumbnail1}
            alt="small sneaker"
            onClick={() => handleThumbnailClick(image1, thumbnail1)}
          />
        </div>
        <div
          className={`border-outline ${
            selectedThumbnail === thumbnail2 ? "outlined" : ""
          }`}
        >
          <img
            className={`small-sneaker ${
              selectedThumbnail === thumbnail2 ? "selected" : ""
            }`}
            src={thumbnail2}
            alt="small sneaker"
            onClick={() => handleThumbnailClick(image2, thumbnail2)}
          />
        </div>
        <div
          className={`border-outline ${
            selectedThumbnail === thumbnail3 ? "outlined" : ""
          }`}
        >
          <img
            className={`small-sneaker ${
              selectedThumbnail === thumbnail3 ? "selected" : ""
            }`}
            src={thumbnail3}
            alt="small sneaker"
            onClick={() => handleThumbnailClick(image3, thumbnail3)}
          />
        </div>
        <div
          className={`border-outline ${
            selectedThumbnail === thumbnail4 ? "outlined" : ""
          }`}
        >
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
      {isOverlayVisible && (
        <Overlay
          selectedImage={selectedImage}
          selectedThumbnail={selectedThumbnail}
          handleThumbnailClick={handleThumbnailClick}
          onClose={handleOverlayClose}
          setSelectedImage={setSelectedImage}
          setSelectedThumbnail={setSelectedThumbnail}
        />
      )}
    </div>
  );
}

export default Gallery;
