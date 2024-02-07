import React, { useEffect, useState } from "react";
import { image1, image2, image3, image4 } from "../images";
import { thumbnail1, thumbnail2, thumbnail3, thumbnail4 } from "../images";
import Overlay from "../components/Overlay";
import { ReactComponent as Previous } from "../images/icon-previous.svg";
import { ReactComponent as Next } from "../images/icon-next.svg";

function Gallery({ handlePreviousClick, handleNextClick }) {
  const [selectedImage, setSelectedImage] = useState(image1);
  const [selectedThumbnail, setSelectedThumbnail] = useState(thumbnail1);
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 53.25 * 16); // 53.25em converted to pixels

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 53.25 * 16);
      // If the screen width becomes larger than 53.25em, ensure the Overlay is visible
      if (width < 53.25 * 16) {
        setOverlayVisible(false); // Turn off the visual display of Overlay
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const handlePreviousMobileClick = () => {
    const images = [image1, image2, image3, image4];
    const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];
    const currentIndex = images.indexOf(selectedImage);
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[previousIndex]);
    setSelectedThumbnail(thumbnails[previousIndex]);
  };

  const handleNextMobileClick = () => {
    const images = [image1, image2, image3, image4];
    const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];
    const currentIndex = images.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setSelectedThumbnail(thumbnails[nextIndex]);
  };

  return (
    <div className="image-container">
      <div className="big-images" onClick={handleBigSneakerClick}>
        <button
          className="previous-mobilebtn"
          onClick={handlePreviousMobileClick}
        >
          <Previous stroke="hsl(26, 100%, 55%)" />
        </button>
        <img className="big-sneaker" src={selectedImage} alt="big sneaker" />
        <button className="next-mobilebtn" onClick={handleNextMobileClick}>
          <Next stroke="hsl(26, 100%, 55%)" />
        </button>
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
