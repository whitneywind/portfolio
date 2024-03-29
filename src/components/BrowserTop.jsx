import { GrClose } from "react-icons/gr";
import { BiSquare } from "react-icons/bi";
import { FaRegWindowMinimize } from "react-icons/fa";

const BrowserTop = ({ color, noBorder }) => {
  let bgColor = color ? `${color}` : "bg-lGreen";
  return (
    <div
      className={`${bgColor} flex justify-end place-items-center px-1 space-x-1 ${
        noBorder ? "" : "border-b-4 border-black"
      }`}
    >
      <FaRegWindowMinimize className="text-2xl" />
      <BiSquare className="text-3xl" />
      <GrClose className="text-2xl" />
    </div>
  );
};
export default BrowserTop;
