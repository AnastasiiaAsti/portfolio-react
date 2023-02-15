import "./Plant.css";

export default function Plant() {
  return (
    <div className="plant-container">
      <div className="base">
        <div clasNames="flowerpot"></div>
        <div className="blade blade-center"></div>
        <div className="blade blade-left-s"></div>
        <div className="blade blade-right-s"></div>
        <div className="blade blade-left-l"></div>
        <div className="blade blade-right-l"></div>
      </div>
    </div>
  );
}
