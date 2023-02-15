import "./SectionOne.css";
import Plant from "../Plant/Plant";

export default function SectionOne() {
  return (
    <div class="sec-1">
      <div class="shelf-container">
        {/* <!-- shelf 1 --> */}
        <div class="things-on-shelf">
          {/* <!-- book links --> */}
          <div class="book-links-container">
            <div class="book-1-container">
              <a href="">
                <div class="book-1">
                  <div class="circle"></div>
                  <div class="link-wrapper">ABOUT</div>
                </div>
              </a>
            </div>
            <div class="book-2-container">
              <a href="#portfolio-container">
                <div class="book-2">
                  <div class="circle"></div>
                  <div class="link-wrapper">PORTFOLIO</div>
                </div>
              </a>
            </div>
          </div>
          {/* <!-- book links END --> */}
          <Plant />
          {/* <!-- book 3&4 container --> */}
          <div class="book-3-and-4-container">
            <div class="book-3">
              <div class="stripe-1"></div>
              <div class="stripe-2"></div>
            </div>
            <div class="book-4">
              <div class="stripe-1"></div>
              <div class="stripe-2"></div>
            </div>
          </div>
          {/* <!-- book 3&4 container ENDS --> */}
        </div>
        <div class="shelf-1"></div>
      </div>
      {/* <!-- shelf 2 --> */}
      <div class="shelf-container">
        <div class="things-on-shelf">
          {/* <!-- clock container --> */}
          <div class="clock-container">
            <div class="clock">
              <div class="outer-clock-face">
                <div class="marking marking-one"></div>
                <div class="marking marking-two"></div>
                <div class="marking marking-three"></div>
                <div class="marking marking-four"></div>
                <div class="inner-clock-face">
                  <div class="hand hour-hand"></div>
                  <div class="hand min-hand"></div>
                  <div class="hand second-hand"></div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- END clock container --> */}
          {/* <!-- book links --> */}
          <div class="book-links-container">
            <div class="book-5-container">
              <a href="/skills">
                <div class="book-5">
                  <div class="circle"></div>
                  <div class="link-wrapper">SKILLS</div>
                </div>
              </a>
            </div>
            <div class="book-6-container">
              <a href="/images/Resume.pdf" target="_blank">
                <div class="book-6">
                  <div class="circle"></div>
                  <div class="link-wrapper">RESUME</div>
                </div>
              </a>
            </div>
            <div class="book-7-container">
              <a href="https://codepen.io/AnastasiiaAsti" target="_blank">
                <div class="book-7">
                  <div class="circle"></div>
                  <div class="link-wrapper">CODEPEN</div>
                </div>
              </a>
            </div>
          </div>
          {/* <!-- END book links container --> */}
        </div>
        <div class="shelf-2"></div>
      </div>
      {/* <!-- 3rd shelf --> */}
      <div class="shelf-container">
        <div class="things-on-shelf">
          {/* <!-- radio buttons --> */}
          <div class="radio-group">
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
                  <i class="fa-solid fa-check"></i>
                </span>
              </label>
            </div>
            <div>
              <input type="radio" id="color-2" name="rotate-cube" value="two" />
              <label for="color-2">
                <span>
                  <i class="fa-solid fa-check"></i>
                </span>
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="color-3"
                name="rotate-cube"
                value="three"
              />
              <label for="color-3">
                <span>
                  <i class="fa-solid fa-check"></i>
                </span>
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="color-4"
                name="rotate-cube"
                value="four"
              />
              <label for="color-4">
                <span>
                  <i class="fa-solid fa-check"></i>
                </span>
              </label>
            </div>
          </div>
          {/* <!-- end radio buttons --> */}
          {/* <!-- toy START --> */}
          <div class="toy-container">
            <div class="links-cube-element">
              <div class="cube">
                {/* <!-- Linkdin --> */}
                <div class="cube-face one">
                  <a
                    href="https://linkedin.com/in/anastasiiaasti"
                    target="_blank"
                  >
                    <i class="fab fa-xl fa-linkedin"></i>
                  </a>
                </div>
                {/* <!-- END Linkdin --> */}
                {/* <!-- GITHUB --> */}
                <div class="cube-face two">
                  <a href="https://github.com/AnastasiiaAsti" target="_blank">
                    <i class="fab fa-xl fa-github"></i>
                  </a>
                </div>
                {/* <!-- END github --> */}
                {/* <!-- Mail --> */}
                <div class="cube-face three">
                  <a class="" href="mailto:asti@asticodes.dev">
                    <i class="fa-solid fa-xl fa-envelope"></i>
                  </a>
                </div>
                {/* <!-- END mail --> */}
                {/* <!-- Instagram --> */}
                <div class="cube-face four">
                  <a
                    href="https://www.instagram.com/dj_astiramira/?hl=en"
                    target="_blank"
                  >
                    <i class="fab fa-xl fa-instagram"></i>
                  </a>
                </div>
                {/* <!-- END instagram --> */}
              </div>
            </div>
            {/* <!-- toy END --> */}
          </div>
        </div>
        <div class="shelf-3"></div>
      </div>
      {/* <!-- END shelf 3 --> */}
    </div>
  );
}
