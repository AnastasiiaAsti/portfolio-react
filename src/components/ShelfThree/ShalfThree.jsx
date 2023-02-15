import "../ShelfThree/ShelfThree.css";

export default function ShelfThree() {
  return (
    <div className="shelf-container">
      <div className="things-on-shelf">
        {/* <!-- radio buttons --> */}
        <div className="radio-group">
          <div>
            <input
              type="radio"
              id="color-1"
              name="rotate-cube"
              value="one"
              checked
            />
            <label for="color-1">
              <span>
                <i className="fa-solid fa-check"></i>
              </span>
            </label>
          </div>
          <div>
            <input type="radio" id="color-2" name="rotate-cube" value="two" />
            <label for="color-2">
              <span>
                <i className="fa-solid fa-check"></i>
              </span>
            </label>
          </div>
          <div>
            <input type="radio" id="color-3" name="rotate-cube" value="three" />
            <label for="color-3">
              <span>
                <i className="fa-solid fa-check"></i>
              </span>
            </label>
          </div>
          <div>
            <input type="radio" id="color-4" name="rotate-cube" value="four" />
            <label for="color-4">
              <span>
                <i className="fa-solid fa-check"></i>
              </span>
            </label>
          </div>
        </div>
        {/* <!-- end radio buttons --> */}
        {/* <!-- toy START --> */}
        <div className="toy-container">
          <div className="links-cube-element">
            <div className="cube">
              {/* <!-- Linkdin --> */}
              <div className="cube-face one">
                <a
                  href="https://linkedin.com/in/anastasiiaasti"
                  target="_blank"
                >
                  <i className="fab fa-xl fa-linkedin"></i>
                </a>
              </div>
              {/* <!-- END Linkdin --> */}
              {/* <!-- GITHUB --> */}
              <div className="cube-face two">
                <a href="https://github.com/AnastasiiaAsti" target="_blank">
                  <i className="fab fa-xl fa-github"></i>
                </a>
              </div>
              {/* <!-- END github --> */}
              {/* <!-- Mail --> */}
              <div className="cube-face three">
                <a className="" href="mailto:asti@asticodes.dev">
                  <i className="fa-solid fa-xl fa-envelope"></i>
                </a>
              </div>
              {/* <!-- END mail --> */}
              {/* <!-- Instagram --> */}
              <div className="cube-face four">
                <a
                  href="https://www.instagram.com/dj_astiramira/?hl=en"
                  target="_blank"
                >
                  <i className="fab fa-xl fa-instagram"></i>
                </a>
              </div>
              {/* <!-- END instagram --> */}
            </div>
          </div>
          {/* <!-- toy END --> */}
        </div>
      </div>
      <div className="shelf-3"></div>
    </div>
  );
}
