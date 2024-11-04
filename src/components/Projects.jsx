import trackerImg from "../assets/tracker.jpg";
import petsImg from "../assets/pets.jpg";
import foodOasisImg from "../assets/foodoasis.jpg";
import mediumImg from "../assets/medium-redesign.jpg";
import eaImg from "../assets/ea.jpg";
import halfgramImg from "../assets/halfgram.jpg";
import ProjectLink from "./ProjectLink";

const Projects = () => {
  return (
    <div className="main-content flex justify-center place-items-center border-black border-4 sm:border-0">
      <div className="project-container z-10 grid grid-cols-2 md:grid-cols-3 place-items-center gap-5 mx-5 lg:mx-10 mb-5 mt-3 md:max-w-[70vw] lg:max-w-[1000px]">
        <ProjectLink
          topColor={"bg-emerald-500"}
          bgColor={"green-100"}
          img={foodOasisImg}
          title="Food Oasis"
          github="https://github.com/hackforla/food-oasis"
          livesite="https://www.foodoasis.net/"
        />
        <ProjectLink
          topColor={"bg-amber-500"}
          bgColor={"amber-100"}
          img={petsImg}
          title="Pet Place"
          github="https://github.com/whitneywind/ts-pets-mobile"
        />

        <ProjectLink
          topColor={"bg-indigo-400"}
          bgColor={"cyan-100"}
          img={halfgramImg}
          title="Halfgram"
          livesite="https://apps.apple.com/us/app/halfgram/id6476069958"
        />
        <ProjectLink
          topColor={"bg-purple-500"}
          bgColor={"indigo-100"}
          img={eaImg}
          title="Expunge Assist"
          livesite="https://expungeassist.org/"
        />
        <ProjectLink
          topColor={"bg-emerald-500"}
          bgColor={"green-100"}
          img={mediumImg}
          title="Medium Restyle"
          github="https://github.com/whitneywind/medium-redesign"
          livesite="https://medium-redesign.vercel.app/"
        />
        <ProjectLink
          topColor={"bg-red-400"}
          bgColor={"red-100"}
          img={trackerImg}
          title="Cafe Tracking"
          github="https://github.com/whitneywind/cafe-tracking"
          livesite="https://cafe-rating.onrender.com/"
        />
      </div>
    </div>
  );
};
export default Projects;
