import "./ShelfOne.css";

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
        {/* <!-- plant Container --> */}
        <div className="plant-container">
          <div className="base">
            <div className="flowerpot"></div>
            <div className="blade blade-center"></div>
            <div className="blade blade-left-s"></div>
            <div className="blade blade-right-s"></div>
            <div className="blade blade-left-l"></div>
            <div className="blade blade-right-l"></div>
          </div>
        </div>
        {/* <!-- plant container ends --> */}
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
