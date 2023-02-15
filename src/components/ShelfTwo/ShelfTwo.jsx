import "../ShelfTwo/ShelfTwo.css";

export default function ShelfWto() {
  return (
    <div className="shelf-container">
      <div className="things-on-shelf">
        {/* <!-- clock container --> */}
        <div className="clock-container">
          <div className="clock">
            <div className="outer-clock-face">
              <div className="marking marking-one"></div>
              <div className="marking marking-two"></div>
              <div className="marking marking-three"></div>
              <div className="marking marking-four"></div>
              <div className="inner-clock-face">
                <div className="hand hour-hand"></div>
                <div className="hand min-hand"></div>
                <div className="hand second-hand"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- END clock container --> */}
        {/* <!-- book links --> */}
        <div className="book-links-container">
          <div className="book-5-container">
            <a href="/skills">
              <div className="book-5">
                <div className="circle"></div>
                <div className="link-wrapper">SKILLS</div>
              </div>
            </a>
          </div>
          <div className="book-6-container">
            <a href="/images/Resume.pdf" target="_blank">
              <div className="book-6">
                <div className="circle"></div>
                <div className="link-wrapper">RESUME</div>
              </div>
            </a>
          </div>
          <div className="book-7-container">
            <a href="https://codepen.io/AnastasiiaAsti" target="_blank">
              <div className="book-7">
                <div className="circle"></div>
                <div className="link-wrapper">CODEPEN</div>
              </div>
            </a>
          </div>
        </div>
        {/* <!-- END book links container --> */}
      </div>
      <div className="shelf-2"></div>
    </div>
  );
}
