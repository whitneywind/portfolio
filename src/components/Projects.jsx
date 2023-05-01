import BrowserTop from "./BrowserTop";
import trackerImg from "../assets/tracker.jpg";
import recsImg from "../assets/recs.jpg";
import teashopImg from "../assets/react-teashop.jpg";
import mediumImg from "../assets/medium-clone.jpg";
import { BsGithub } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";

const Projects = () => {
  return (
    <div className="main-content flex justify-center place-items-center h-[94%] sm:h-[100%] w-full border-black border-4 sm:border-0 overflow-y-scroll">
      <div className="project-container h-full w-full z-10 grid grid-cols-1 md:grid-cols-2 place-items-center gap-5 mx-5">
        <div className="border-solid border-black border-4 shadow-custom rounded-sm">
          <BrowserTop color="bg-red-400" />
          <div className="flex bg-red-100">
            <img
              src={trackerImg}
              alt="cafe tracking screenshot"
              className="w-36 object-cover object-left border-black border-r-4"
            />
            <div className="mx-3 text-center p-2">
              <h2 className="font-bold text-lg underline">Cafe Organizer</h2>
              <p className="hidden md:block border-dotted border-red-400 border-b-2 pb-2 px-2 my-2">
                Complete with account creation and user authentication, this web
                app helps cafe lovers keep track of their cafe-hopping
              </p>
              <p className="font-semibold pb-2">
                JavaScript, React, Styled Components, MongoDB Atlas, Mongoose,
                Node, Express
              </p>
              <div className="flex justify-evenly">
                <a
                  href="#"
                  target="_blank"
                  className="underline flex place-items-center"
                >
                  Live Site
                  <RiComputerLine className="text-lg ml-[2px]" />
                </a>
                <a
                  href="https://github.com/whitneywind/cafe-tracking"
                  target="_blank"
                  className="flex place-items-center underline"
                >
                  Code
                  <BsGithub className="text-lg ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-solid border-black border-4 shadow-custom rounded-sm">
          <BrowserTop color="bg-amber-600" />
          <div className="flex bg-amber-100">
            <img
              src={recsImg}
              alt=""
              className="w-36 object-cover border-r-4 border-black"
            />
            <div className="mx-3 text-center p-2">
              <h2 className="font-bold text-lg underline">Coffeeshop Recs</h2>
              <p className="hidden md:block border-dotted border-amber-400 border-b-2 pb-2 px-2 my-2">
                Complete with account creation and user authentication, this web
                app helps cafe lovers keep track of their cafe-hopping
              </p>
              <p className="font-semibold pb-2">
                JavaScript, React, Styled Components, MongoDB Atlas, Mongoose,
                Node, Express
              </p>
              <div className="flex justify-evenly">
                <a
                  href="https://cafe-recs-next-42mjhimva-whitneywind.vercel.app/"
                  target="_blank"
                  className="underline flex place-items-center"
                >
                  Live Site
                  <RiComputerLine className="text-lg ml-[2px]" />
                </a>
                <a
                  href="https://github.com/whitneywind/cafe-recs-next.js"
                  target="_blank"
                  className="flex place-items-center underline"
                >
                  Code
                  <BsGithub className="text-lg ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-solid border-black border-4 shadow-custom rounded-sm bg-vlGreen">
          <BrowserTop color="bg-cyan-400" />
          <div className="flex bg-cyan-100">
            <img
              src={teashopImg}
              alt="react teashop homepage screenshot"
              className="w-36 object-cover object-left border-r-4 border-black"
            />
            <div className="mx-3 text-center p-2">
              <h2 className="font-bold text-lg underline">React Teashop</h2>
              <p className="hidden md:block border-dotted border-cyan-400 border-b-2 pb-2 px-2 my-2">
                Complete with account creation and user authentication, this web
                app helps cafe lovers keep track of their cafe-hopping
              </p>
              <p className="font-semibold pb-2">
                JavaScript, React, Styled Components, MongoDB Atlas, Mongoose,
                Node, Express
              </p>
              <div className="flex justify-evenly">
                <a
                  href="https://whitneywind.github.io/react-teashop/"
                  target="_blank"
                  className="underline flex place-items-center"
                >
                  Live Site
                  <RiComputerLine className="text-lg ml-[2px]" />
                </a>
                <a
                  href="https://github.com/whitneywind/react-teashop"
                  target="_blank"
                  className="flex place-items-center underline"
                >
                  Code
                  <BsGithub className="text-lg ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-solid border-black border-4 shadow-custom rounded-sm bg-vlGreen">
          <BrowserTop color="bg-green-500" />
          <div className="flex bg-green-100">
            <img
              src={mediumImg}
              alt="medium clone screenshot"
              className="w-36 object-cover object-left border-black border-r-4"
            />
            <div className="mx-3 text-center p-2">
              <h2 className="font-bold text-lg underline">
                Medium Clone Reimagined
              </h2>
              <p className="hidden md:block border-dotted border-green-400 border-b-2 pb-2 px-2 my-2">
                Complete with account creation and user authentication, this web
                app helps cafe lovers keep track of their cafe-hopping
              </p>
              <p className="font-semibold pb-2">
                JavaScript, React, Styled Components, MongoDB Atlas, Mongoose,
                Node, Express
              </p>
              <div className="flex justify-evenly">
                <a
                  href="#"
                  target="_blank"
                  className="underline flex place-items-center"
                >
                  Live Site
                  <RiComputerLine className="text-lg ml-[2px]" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="flex place-items-center underline"
                >
                  Code
                  <BsGithub className="text-lg ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
