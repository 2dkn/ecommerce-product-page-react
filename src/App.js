import {
  logo,
  cart,
  close,
  deletebtn,
  menu,
  minus,
  next,
  plus,
  previous,
  avatar,
  thumbnail1,
  thumbnail2,
  thumbnail3,
  thumbnail4,
  image1,
  image2,
  image3,
  image4,
} from "./images";
import Header from "./components/Header";
import "../src/dist/styles.css";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content-container">
        <div className="image-container">
          <div className="big-images">
            <img className="big-sneaker" src={image1} alt="big sneaker" />
          </div>
          <div className="small-images">
            <img
              className="small-sneaker"
              src={thumbnail1}
              alt="small sneaker"
            />
            <img
              className="small-sneaker"
              src={thumbnail2}
              alt="small sneaker"
            />
            <img
              className="small-sneaker"
              src={thumbnail3}
              alt="small sneaker"
            />
            <img
              className="small-sneaker"
              src={thumbnail4}
              alt="small sneaker"
            />
          </div>
        </div>
        <div className="details">
          <h1>Sneaker Company</h1>
          <h3>Fall Limited Edition Sneakers</h3>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <p>$125.00</p>
          <p>50%</p>
          <p>$250.00</p>
          <button>-</button>
          <p>0</p>
          <button>+</button>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default App;
