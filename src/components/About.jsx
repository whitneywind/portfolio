import BrowserTop from "./BrowserTop";
import img from "../assets/IMG_1727.jpg";

const About = () => {
  return (
    <>
      <div className="w-5/6 lg:w-2/3 max-w-2xl md:h-2/3 h-1/3 lg:h-2/3 self-center border-solid border-black border-4 mb-16 mt-20 lg:mt-22 lg:mb-12 shadow-custom rounded-sm bg-vlGreen">
        <BrowserTop />
        <div className="flex items-center">
          <div className="flex space-x-5 h-fit justify-center items-center">
            <img
              src={img}
              className="w-1/3 lg:w-2/3 border-4 lg:border-black"
            />
            <div className="text-left my-4 sm:pr-6 lg:pr-2 sm:pl-12 lg:pl-2">
              <h1 className="font-bold text-lg mb-2">About Me</h1>
              <p className="text-lg">
                Hi! I'm Whitney, a developer on the west coast with a background
                in linguists. A true linguist at heart, I'm obsessed with all
                things language, both natural and programming.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-5/6 h-2/3 max-w-[1000px] self-center border-black border-solid border-4 my-8 shadow-custom rounded-sm bg-vlGreen">
        <div className="bg-lGreen border-solid border-black border-b-4 h-10 flex text-lg place-items-center px-1 justify-center">
          <p className="hidden sm:block">
            Some of the technologies I work with:
          </p>
          <p className="sm:hidden">Technologies:</p>
        </div>
        <div className="grid h-[80%] md:grid-cols-3 lg:grid-cols-6 md:space-y-12 md:h-3/5 md:pt-5 lg:pt-0 sm:content-center font-bold md:text-lg lg:text-2xl">
          <span className="mt-2 md:mt-12 mb-0">JavaScript</span>
          <span>TypeScript</span>
          <span>Next.js</span>
          <span>HTML5</span>
          <span>Node</span>
          <span>Express</span>
          <span>React</span>
          <span>CSS3</span>
          <span>TailwindCSS</span>
          <span>MongoDB</span>
          <span>React Native</span>
          <span>Git & GitHub</span>
        </div>
      </div>
    </>
  );
};
export default About;
