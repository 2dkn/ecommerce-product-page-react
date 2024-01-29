import React, { useState } from "react";
import { image1, image2, image3, image4 } from "../images";
import { thumbnail1, thumbnail2, thumbnail3, thumbnail4 } from "../images";
import { ReactComponent as Close } from "../images/icon-close.svg";
import { ReactComponent as Previous } from "../images/icon-previous.svg";
import { ReactComponent as Next } from "../images/icon-next.svg";

function Overlay({ selectedImage, onClose }) {
  const images = [image1, image2, image3, image4];
  const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];
  const [overlayImage, setOverlayImage] = useState(image1);
  const [overlayThumbnail, setOverlayThumbnail] = useState(thumbnail1);
  const [currentIndex, setCurrentIndex] = useState(
    images.indexOf(selectedImage)
  );

  const handleThumbnailClickInOverlay = (newImage, newThumbnail) => {
    setCurrentIndex(images.indexOf(newImage));
    handleOverlayThumbnailClick(newImage, newThumbnail);
  };

  const handleOverlayThumbnailClick = (newImage, newThumbnail) => {
    setOverlayImage(newImage);
    setOverlayThumbnail(newThumbnail);
  };

  const handlePreviousClick = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="overlay">
      <div className="overlay-content">
        <div className="close-btn">
          <button className="close" onClick={onClose}>
            <Close fill="hsl(26, 100%, 55%)" />
          </button>
        </div>
        <div className="nav-buttons">
          <button className="previous-btn" onClick={handlePreviousClick}>
            <Previous stroke="hsl(26, 100%, 55%)" />
          </button>
          <img
            className="big-sneakers"
            src={images[currentIndex]}
            alt="overlay sneaker"
          />
          <button className="next-btn" onClick={handleNextClick}>
            <Next stroke="hsl(26, 100%, 55%)" />
          </button>
        </div>
      </div>
      <div className="overlay-imgs">
        {thumbnails.map((thumbnail, index) => (
          <img
            key={index}
            className={`small-sneaker ${
              currentIndex === index ? "selected" : ""
            }`}
            src={thumbnail}
            alt={`small sneaker ${index + 1}`}
            onClick={() =>
              handleThumbnailClickInOverlay(images[index], thumbnail)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Overlay;
