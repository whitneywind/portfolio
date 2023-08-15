import BrowserTop from "./BrowserTop";
import trackerImg from "../assets/tracker.jpg";
import petsImg from "../assets/pets.jpg";
// import recsImg from "../assets/recs.jpg";
import teashopImg from "../assets/react-teashop.jpg";
import mediumImg from "../assets/medium-redesign.jpg";
import { BsGithub } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";

const Projects = () => {
  return (
    <div className="main-content flex justify-center place-items-center h-[94%] sm:h-[100%] w-full border-black border-4 sm:border-0 overflow-y-scroll pt-[18rem] sm:pt-[10rem] md:pt-[24rem] lg:pt-14">
      <div className="project-container w-full z-10 grid grid-cols-1 lg:grid-cols-2 place-items-center gap-5 mx-5 xl:mx-20 2xl:gap-12">
        <div className="border-solid border-black border-4 shadow-custom rounded-sm bg-vlGreen">
          <BrowserTop color="bg-green-500" />
          <div className="flex bg-green-100">
            <img
              src={mediumImg}
              alt="medium clone screenshot"
              className="w-36 object-cover border-black border-r-4"
            />
            <div className="mx-3 text-center p-2 2xl:m-12">
              <h2 className="font-bold text-lg underline">Medium Reimagined</h2>
              <p className="hidden md:block border-dotted border-green-400 border-b-2 pb-2 px-2 my-2">
                A Next.js project with a Sanity CMS-powered backend and a sleek
                UI. Users can structure and store rich text blog posts with
                interactive comment functionality.
              </p>
              <p className="font-semibold pb-2">
                TypeScript, JavaScript, Next.js, Tailwind CSS, Sanity CMS,
                Vercel
              </p>
              <div className="flex justify-evenly">
                <a
                  href="https://medium-redesign.vercel.app/"
                  target="_blank"
                  className="flex place-items-center underline"
                >
                  Live Site
                  <RiComputerLine className="text-lg ml-[2px]" />
                </a>
                <a
                  href="https://github.com/whitneywind/medium-redesign"
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
            <div className="mx-3 text-center p-2 2xl:m-12">
              <h2 className="font-bold text-lg underline">Bilingual Teashop</h2>
              <p className="hidden md:block border-dotted border-cyan-400 border-b-2 pb-2 px-2 my-2">
                Users can browse the Korean or English versions of this
                React-powered site, get details about the shop, and add teas to
                their fully functional shopping carts.
              </p>
              <p className="font-semibold pb-2 px-14 md:px-0">
                TypeScript, React, Vite, React Router v6, HTML5, CSS3, Bootstrap
              </p>
              <div className="flex justify-evenly">
                <a
                  href="https://whitneywind.github.io/tea-collective/#/"
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
        {/* <div className="border-solid border-black border-4 shadow-custom rounded-sm">
          <BrowserTop color="bg-amber-600" />
          <div className="flex bg-amber-100">
            <img
              src={recsImg}
              alt=""
              className="w-36 object-cover border-r-4 border-black"
            />
            <div className="mx-3 text-center p-2 2xl:m-12">
              <h2 className="font-bold text-lg underline">Coffeeshop Recs</h2>
              <p className="hidden md:block border-dotted border-amber-400 border-b-2 pb-2 px-2 my-2">
                This eye-catching site allows users to browse coffeeshops by
                area, give them ratings, save their favorites, and submit their
                own.
              </p>
              <p className="font-semibold pb-2">
                TypeScript, Next.js, Tailwind CSS, MongoDB, Mongoose, NextAuth
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
        </div> */}
        <div className="border-solid border-black border-4 shadow-custom rounded-sm">
          <BrowserTop color="bg-amber-600" />
          <div className="flex bg-amber-100">
            <img
              src={petsImg}
              alt=""
              className="w-36 object-cover border-r-4 border-black"
            />
            <div className="mx-3 text-center p-2 2xl:m-12">
              <h2 className="font-bold text-lg underline">Pet Place</h2>
              <p className="hidden md:block border-dotted border-amber-400 border-b-2 pb-2 px-2 my-2">
                React Native Pet Place is a mobile app for pet owners. With Pet
                Place, owners can keep track of their pets' info, photos, and
                activities all in one place.
              </p>
              <p className="font-semibold pb-2">
                React Native, JavaScript, TypeScript, Expo, Tailwind,
                react-redux
              </p>
              <div className="flex justify-evenly">
                {/* <a
                  href="https://cafe-recs-next-42mjhimva-whitneywind.vercel.app/"
                  target="_blank"
                  className="underline flex place-items-center"
                >
                  Live Site
                  <RiComputerLine className="text-lg ml-[2px]" />
                </a> */}
                <a
                  href="https://github.com/whitneywind/react-native-pet-care"
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
          <BrowserTop color="bg-red-400" />
          <div className="flex bg-red-100">
            <img
              src={trackerImg}
              alt="cafe tracking screenshot"
              className="w-36 object-cover object-left border-black border-r-4"
            />
            <div className="mx-3 text-center p-2 2xl:m-12">
              <h2 className="font-bold text-lg underline">Cafe Organizer</h2>
              <p className="hidden md:block border-dotted border-red-400 border-b-2 pb-2 px-2 my-2">
                Complete with account creation and user authentication, this web
                app helps cafe lovers keep track of their cafe-hopping
              </p>
              <p className="font-semibold pb-2 md:px-4">
                JavaScript, React, Styled Components, MongoDB Atlas, Mongoose,
                Node, Express
              </p>
              <div className="flex justify-evenly">
                <a
                  href="https://cafe-rating.onrender.com/"
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
      </div>
    </div>
  );
};
export default Projects;
