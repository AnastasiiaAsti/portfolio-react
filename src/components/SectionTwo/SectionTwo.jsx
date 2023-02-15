import "./SectionTwo.css";

export default function SectionTwo() {
  return (
    <div class="sec-2">
      <div class="laptop-container">
        <div class="laptop">
          <div class="vscode">
            <div class="bar">
              <div class="red"></div>
              <div class="green"></div>
              <div class="yellow"></div>
            </div>
          </div>
          <div class="terminal">
            <div class="bar">
              <div class="red"></div>
              <div class="green"></div>
              <div class="yellow"></div>
            </div>
            <div class="terminal-message">
              <span id="text" class="text"></span>
            </div>
          </div>
        </div>
        <div class="laptop-btm"></div>
      </div>
    </div>
  );
}
