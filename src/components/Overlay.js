import React, { useState } from "react";
import { image1, image2, image3, image4 } from "../images";
import { thumbnail1, thumbnail2, thumbnail3, thumbnail4 } from "../images";
import { ReactComponent as Close } from "../images/icon-close.svg";
import { ReactComponent as Previous } from "../images/icon-previous.svg";
import { ReactComponent as Next } from "../images/icon-next.svg";

function Overlay({
  selectedImage,
  selectedThumbnail,
  handleThumbnailClick,
  onClose,
}) {
  const images = [image1, image2, image3, image4];
  const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];
  const [currentIndex, setCurrentIndex] = useState(
    images.indexOf(selectedImage)
  );

  const handleThumbnailClickInOverlay = (newImage, newThumbnail) => {
    setCurrentIndex(images.indexOf(newImage));
    handleThumbnailClick(newImage, newThumbnail);
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
        <img
          className={`small-sneaker ${
            selectedThumbnail === thumbnails[0] ? "selected" : ""
          }`}
          src={thumbnails[0]}
          alt="small sneaker"
          onClick={() =>
            handleThumbnailClickInOverlay(images[0], thumbnails[0])
          }
        />
        <img
          className={`small-sneaker ${
            selectedThumbnail === thumbnails[1] ? "selected" : ""
          }`}
          src={thumbnails[1]}
          alt="small sneaker"
          onClick={() =>
            handleThumbnailClickInOverlay(images[1], thumbnails[1])
          }
        />
        <img
          className={`small-sneaker ${
            selectedThumbnail === thumbnails[2] ? "selected" : ""
          }`}
          src={thumbnails[2]}
          alt="small sneaker"
          onClick={() =>
            handleThumbnailClickInOverlay(images[2], thumbnails[2])
          }
        />
        <img
          className={`small-sneaker ${
            selectedThumbnail === thumbnails[3] ? "selected" : ""
          }`}
          src={thumbnails[3]}
          alt="small sneaker"
          onClick={() =>
            handleThumbnailClickInOverlay(images[3], thumbnails[3])
          }
        />
      </div>
    </div>
  );
}

export default Overlay;
