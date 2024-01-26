import React from "react";
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
  return (
    <div className="overlay">
      <div className="overlay-content">
        <button className="close" onClick={onClose}>
          <Close />
        </button>
        <img className="" src={selectedImage} alt="overlay sneaker" />
      </div>
      <div className="overlay-imgs">
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

export default Overlay;
