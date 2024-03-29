import Github from "./mini-components/Github";
import Detail from "./mini-components/Detail";
import Email from "./mini-components/Email";
import BrowserTop from "./BrowserTop";

const Intro = () => {
  return (
    <div className="main-content flex justify-center place-items-center min-h-[94%] h-[100%] w-full">
      <div className="w-11/12 h-5/6 border-black border-solid border-4 shadow-custom rounded-sm bg-vlGreen">
        <BrowserTop />
        <div className="flex h-[93%] flex-col justify-center items-center space-y-28 md:space-y-16">
          <div className="flex flex-col justify-center items-center mt-8">
            <h1 className="text-4xl md:text-7xl font-bold w-2/3">
              Whitney Gould
            </h1>
            <h2 className="text-4xl mt-3">Software Developer</h2>
          </div>

          <p className="text-lgmd:text-2xl font-semibold md:px-8 py-1 border-black border-double border-4 w-2/3 md:w-1/2">
            Crafting innovative and engaging web experiences
          </p>
          <Detail />
          <Github />
          <Email />
        </div>
      </div>
    </div>
  );
};
export default Intro;
