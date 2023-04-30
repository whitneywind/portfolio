import { GrClose } from "react-icons/gr";
import { BiSquare } from "react-icons/bi";
import { FaRegWindowMinimize } from "react-icons/fa";

const BrowserTop = ({ color }) => {
  let bgColor = color ? `${color}` : "bg-lGreen";
  return (
    <div
      className={`${bgColor} border-black border-solid border-b-4 h-10 flex justify-end place-items-center px-1 space-x-1`}
    >
      <FaRegWindowMinimize className="text-2xl" />
      <BiSquare className="text-3xl" />
      <GrClose className="text-2xl" />
    </div>
  );
};
export default BrowserTop;
