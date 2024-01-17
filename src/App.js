import logo from "../src/images/logo.svg";
import avatar from "../src/images/image-avatar.png";

function App() {
  return (
    <div className="container">
      <header className="header-container">
        <img src={logo} alt="sneakers" />
        <p>Collection</p>
        <p>Men</p>
        <p>Women</p>
        <p>About</p>
        <p>Contact</p>
        <button>cart</button>
        <img src={avatar} alt="Man glasses" />
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
