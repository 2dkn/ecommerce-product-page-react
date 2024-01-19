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
import "../src/dist/styles.css";

function App() {
  return (
    <div className="container">
      <header className="header-container">
        <div className="header-left">
          <img className="logo" src={logo} alt="sneakers" />
          <p className="links">Collection</p>
          <p className="links">Men</p>
          <p className="links">Women</p>
          <p className="links">About</p>
          <p className="links">Contact</p>
        </div>
        <div className="header-right">
          <img className="cart" src={cart} alt="cart button" />
          <img className="avatar" src={avatar} alt="Man glasses" />
        </div>
      </header>
      <div className="imgcontent-container">
        <div className="images"></div>
        <div className="content">
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
