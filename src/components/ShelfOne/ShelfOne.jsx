import "./ShelfOne.css";
import Plant from "../Plant/Plant";

export default function ShelfOne() {
  return (
    <div className="shelf-container">
      {/* <!-- shelf 1 --> */}
      <div className="things-on-shelf">
        {/* <!-- book links --> */}
        <div className="book-links-container">
          <div className="book-1-container">
            <a href="">
              <div className="book-1">
                <div className="circle"></div>
                <div className="link-wrapper">ABOUT</div>
              </div>
            </a>
          </div>
          <div className="book-2-container">
            <a href="#portfolio-container">
              <div className="book-2">
                <div className="circle"></div>
                <div className="link-wrapper">PORTFOLIO</div>
              </div>
            </a>
          </div>
        </div>
        {/* <!-- book links END --> */}
        <Plant />
        {/* <!-- book 3&4 container --> */}
        <div className="book-3-and-4-container">
          <div className="book-3">
            <div className="stripe-1"></div>
            <div className="stripe-2"></div>
          </div>
          <div className="book-4">
            <div className="stripe-1"></div>
            <div className="stripe-2"></div>
          </div>
        </div>
        {/* <!-- book 3&4 container ENDS --> */}
      </div>
      <div className="shelf-1"></div>
    </div>
  );
}
