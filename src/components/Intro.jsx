import { GrClose } from "react-icons/gr";
import { BiSquare } from "react-icons/bi";
import { FaRegWindowMinimize } from "react-icons/fa";
import Github from "./mini-components/Github";
import Detail from "./mini-components/Detail";
import Email from "./mini-components/Email";

const Intro = () => {
  return (
    <div className="main-content flex justify-center place-items-center h-[93%] w-full">
      <div className="w-11/12 h-5/6 border-solid border-4 shadow-custom rounded-sm bg-vlGreen">
        <div className="bg-lGreen border-solid border-b-4 h-10 flex justify-end place-items-center px-1 space-x-1">
          <FaRegWindowMinimize className="text-2xl" />
          <BiSquare className="text-3xl" />
          <GrClose className="text-2xl" />
        </div>
        <div className="flex h-[93%] flex-col justify-center items-center space-y-24">
          <h1 className="text-5xl sm:text-7xl font-bold w-2/3 md:w-1/2">
            Software Developer
          </h1>
          {/* <p className="text-3xl font-bold px-8 py-1 w-2/3 md:w-1/2">
            Whitney Gould
          </p> */}
          <p className="text-lg px-8 py-1 border-4 w-2/3 md:w-1/2">
            Creating innovative, engaging web experiences on the west coast
          </p>
        </div>
      </div>
      <Detail />
      <Github />
      <Email />
    </div>
  );
};
export default Intro;
