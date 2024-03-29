import BrowserTop from "./BrowserTop";
import img from "../assets/profile.jpg";

const About = () => {
  return (
    <div className="h-[100%] flex flex-col justify-center max-w-[1300px] overflow-y-scroll">
      <div className="w-5/6 lg:w-2/3 max-w-2xl self-center border-solid border-black border-4 shadow-custom rounded-sm bg-vlGreen">
        <BrowserTop />
        <div className="flex items-center">
          <div className="flex space-x-5 h-fit justify-center items-center">
            <img src={img} className="w-1/3 border-4 lg:border-black" />
            <div className="text-left my-4 pr-6 sm:pl-12 lg:pl-2">
              <h1 className="font-bold text-lg mb-2">About Me</h1>
              <p className="text-lg">
                Hi! I'm Whitney, a developer on the west coast with a background
                in linguistics. A true linguist at heart, I'm obsessed with all
                things language, both natural and programming.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 w-5/6 max-w-[1000px] self-center border-black border-solid border-4 shadow-custom rounded-sm bg-vlGreen">
        <div className="bg-lGreen border-solid border-black border-b-4 h-10 flex text-lg place-items-center px-1 justify-center">
          <p className="hidden sm:block">Some technologies I work with:</p>
          <p className="sm:hidden">Technologies:</p>
        </div>
        <div className="grid md:grid-cols-3 md:space-y-6 md:mt-2 md:mb-12 md:h-3/5 sm:content-center font-bold md:text-lg lg:text-2xl">
          <span className="md:py-6 md:pb-0">React</span>
          <span className="">JavaScript/TypeScript</span>
          <span className="">SwiftUI</span>
          <span>React Native</span>
          {/* <span>HTML/CSS</span> */}
          {/* <span>SwiftUI</span> */}
          <span>MongoDB</span>
          <span>Firebase</span>
          {/* <span>Node</span> */}
          {/* <span>MongoDB</span>
          <span>React Native</span>
          <span>Git & GitHub</span> */}
        </div>
      </div>
    </div>
  );
};
export default About;
