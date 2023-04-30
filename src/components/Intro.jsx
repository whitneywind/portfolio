import Github from "./mini-components/Github";
import Detail from "./mini-components/Detail";
import Email from "./mini-components/Email";
import BrowserTop from "./BrowserTop";

const Intro = () => {
  return (
    <div className="main-content flex justify-center place-items-center h-[100%] w-full">
      <div className="w-11/12 h-5/6 border-black border-solid border-4 shadow-custom rounded-sm bg-vlGreen">
        <BrowserTop />
        <div className="flex h-[93%] flex-col justify-center items-center space-y-24">
          <h1 className="text-5xl sm:text-7xl font-bold w-2/3 md:w-1/2">
            Software Developer
          </h1>
          {/* <p className="text-3xl font-bold px-8 py-1 w-2/3 md:w-1/2">
            Whitney Gould
          </p> */}
          <p className="text-lg px-8 py-1 border-black border-4 w-2/3 md:w-1/2">
            Creating innovative, engaging web experiences / Whitney Gould
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
