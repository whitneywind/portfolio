import BrowserTop from "./BrowserTop";
import img from "../assets/profile.jpg";
import Dropdown from "./Dropdown";

const Intro = () => {
  return (
    <div className="h-[100%] flex flex-col justify-center max-w-[1300px]">
      <div className="mt-6 md:mt-12 w-5/6 lg:w-2/3 max-w-2xl self-center border-solid border-black border-4 shadow-custom rounded-sm bg-vlGreen">
        <BrowserTop />
        <div className="flex items-center">
          <div className="flex-col flex space-x-5 justify-center items-center md:px-5">
            <img src={img} className="w-1/2 mt-3 border-4 lg:border-black" />
            <div className="text-left my-4 pr-6 sm:pl-12 lg:pl-2">
              <p className="text-lg md:text-xl text-center md:px-5">
                Hi! I'm Whitney, a software and GIS developer with a passion for
                maps and a love of languages - both natural and programming.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Dropdown />
    </div>
  );
};
export default Intro;
