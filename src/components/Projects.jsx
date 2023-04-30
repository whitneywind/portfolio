import BrowserTop from "./BrowserTop";
import img from "../assets/IMG_1727.jpg";
import { BsGithub } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";

const Projects = () => {
  return (
    <div className="main-content flex justify-center place-items-center h-[94%] sm:h-[100%] w-full border-black border-4 sm:border-0 overflow-y-scroll">
      <div className="project-container h-full w-full z-10 grid grid-cols-1 md:grid-cols-2 place-items-center gap-5 mx-5">
        <div className="border-solid border-black border-4 shadow-custom rounded-sm">
          <BrowserTop color="bg-sky-400" />
          <div className="flex">
            <img
              src={img}
              alt=""
              className="w-36 object-contain border-black border-4"
            />
            <div className="mx-3 text-center my-5">
              <h2 className="font-bold text-lg underline">Cafe Organizer</h2>
              <p className="hidden md:block border-dotted border-sky-900 border-b-2 pb-2 px-2 my-2">
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
        <div className="border-solid border-black border-4 shadow-custom rounded-sm bg-vlGreen">
          <BrowserTop color="bg-red-400" />
          <div className="flex">
            <img src={img} alt="" className="w-36 object-contain" />
            <div>
              <h2 className="font-bold">Bilingual Teashop</h2>
              <p className="hidden md:block">
                Complete with account creation and user authentication, this web
                app helps cafe lovers keep track of their cafe-hopping
              </p>
              <p>
                Uses: JavaScript, React, Styled Components, MongoDB Atlas,
                Mongoose, Node, Express
              </p>
            </div>
          </div>
        </div>
        <div className="border-solid border-black border-4 shadow-custom rounded-sm bg-vlGreen">
          <BrowserTop color="bg-yellow-400" />
          <div className="flex">
            <img src={img} alt="" className="w-36 object-contain" />
            <div className="my-5">
              <h2 className="font-bold">Medium Clone Reimagined</h2>
              <p className="hidden md:block">
                Complete with account creation and user authentication, this web
                app helps cafe lovers keep track of their cafe-hopping
              </p>
              <p className="font-bold">
                Uses: JavaScript, React, Styled Components, MongoDB Atlas,
                Mongoose, Node, Express
              </p>
            </div>
          </div>
        </div>
        <div className="border-solid border-black border-4 shadow-custom rounded-sm bg-vlGreen">
          <BrowserTop color="bg-purple-400" />
          <div className="flex">
            <img src={img} alt="" className="w-36 object-contain" />
            <div>
              <h2 className="font-bold">Coffeeshop Recs</h2>
              <p className="hidden md:block">
                Complete with account creation and user authentication, this web
                app helps cafe lovers keep track of their cafe-hopping
              </p>
              <p>
                Uses: JavaScript, React, Styled Components, MongoDB Atlas,
                Mongoose, Node, Express
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
