import img from "../assets/IMG_1727.jpg";

const About = () => {
  return (
    // <div className="w-fit border-solid border-4 shadow-custom rounded-sm bg-vlGreen">
    //   <div className="bg-lGreen border-solid border-b-4 h-10 flex justify-end place-items-center px-1 space-x-1"></div>
    //   <div className="flex w-2/3 space-x-5 place-items-center h-36">
    //     <img src={img} className="h-1/5 border-4" />
    //     <div className="border-2 h-1/2 p-2 text-left">
    //       <h1 className="font-bold">About Me</h1>
    //       <p>
    //         Hi! I'm Whitney, a developer on the west coast with a background in
    //         linguists. A linguist at heart, I love all things language - both
    //         natural languages and computer languages.
    //       </p>
    //     </div>
    //   </div>
    // </div>
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
        <div className="bg-lGreen border-solid border-b-4 h-10 flex justify-end place-items-center px-1 space-x-1"></div>
        <div className="flex h-fit flex-col justify-center items-center">
          content2
        </div>
      </div>
    </>
  );
};
export default About;
