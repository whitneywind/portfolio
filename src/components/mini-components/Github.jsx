import { BsGithub } from "react-icons/bs";

const Github = () => {
  return (
    <div className="hidden md:block absolute left-10 xl:left-[15%] 2xl:left-[21%] top-[19%] w-1/5 md:max-w-[200px] 2xl:w-1/6 border-solid border-black border-4 shadow-custom rounded-sm bg-vlGreen">
      <div className="bg-yellow-200 border-black border-solid border-b-4 h-10 flex place-items-center justify-center">
        <BsGithub className="text-2xl" />
      </div>
      <div className="flex flex-col justify-center 2xl:py-3 items-center">
        <a
          className="my-4 text-center text-lg underline cursor-pointer"
          href="https://github.com/whitneywind"
          target="_blank"
        >
          View my github
        </a>
      </div>
    </div>
  );
};
export default Github;
