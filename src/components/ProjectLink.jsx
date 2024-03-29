import BrowserTop from "./BrowserTop";

const ProjectLink = ({
  topColor,
  bgColor,
  img,
  title,
  github,
  livesite,
  details,
}) => {
  return (
    <div>
      <div className="border-solid border-black border-4 shadow-custom rounded-sm">
        <BrowserTop color={`${topColor}`} />
        <div className={`flex flex-col ${bgColor}`}>
          <a href={livesite ? livesite : github} target="_blank">
            <img
              src={img}
              alt="medium clone screenshot"
              className="w-fill object-cover"
            />
          </a>
        </div>
      </div>
      <h2 className="hidden sm:block font-bold text-lg mb-2 mt-4 ">{title}</h2>
      <div className={"hidden md:flex w-[100%] justify-around"}>
        {/* <a
          href={details}
          target="_blank"
          className={`${topColor} text-xl border-[3px] border-black px-4 rounded-md`}
        >
          Details
        </a> */}
        <a
          href={github}
          target="_blank"
          className={`${
            !github ? "hidden" : ""
          } ${topColor} text-lg border-[3px] border-black px-4 rounded-md`}
        >
          Code
        </a>
        <a
          href={livesite}
          target="_blank"
          className={`${
            !livesite ? "hidden" : ""
          } ${topColor} text-lg border-[3px] border-black px-4 rounded-md`}
        >
          Link
        </a>
      </div>
    </div>
  );
};
export default ProjectLink;
