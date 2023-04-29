import img from "../assets/IMG_1727.jpg";

const About = () => {
  return (
    <>
      <div className="w-2/3 max-w-2xl h-2/3 self-center border-solid border-4 mt-8 shadow-custom rounded-sm bg-vlGreen">
        <div className="bg-lGreen border-solid border-b-4 h-10 flex justify-end place-items-center px-1 space-x-1"></div>
        <div className="flex items-center h-[22rem]">
          <div className="flex space-x-5 mx-3 h-fit justify-center items-center">
            <img src={img} className="w-2/5 border-4" />
            <div className="px-4 text-left">
              <h1 className="font-bold">About Me</h1>
              <p>
                Hi! I'm Whitney, a developer on the west coast with a background
                in linguists. A true linguist at heart, I'm obsessed with all
                things language, both natural and programming.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-5/6 h-1/3 self-center border-solid border-4 my-8 shadow-custom rounded-sm bg-vlGreen">
        <div className="bg-lGreen border-solid border-b-4 h-10 flex text-lg place-items-center px-1">
          Some of the technologies I work with:
        </div>
        <div className="grid grid-cols-6 space-y-4">
          <span className="mt-4 mb-0">JavaScript</span>
          <span>TypeScript</span>
          <span>React</span>
          <span>Next.js</span>
          <span>Node</span>
          <span>Express</span>
          <span>HTML5 & CSS3</span>
          <span>TailwindCSS</span>
          <span>MongoDB</span>
          <span>Express</span>
          <span>React Native</span>
          <span>Git & GitHub</span>
        </div>
      </div>
    </>
  );
};
export default About;
