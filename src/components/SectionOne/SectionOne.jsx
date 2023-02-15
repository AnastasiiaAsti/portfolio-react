import "./SectionOne.css";
import ShelfOne from "../ShelfOne/ShelfOne";
import ShelfTwo from "../ShelfTwo/ShelfTwo";
import ShelfThree from "../ShelfThree/ShalfThree";

export default function SectionOne() {
  return (
    <div class="sec-1">
      <ShelfOne />
      <ShelfTwo />
      <ShelfThree />
    </div>
  );
}
